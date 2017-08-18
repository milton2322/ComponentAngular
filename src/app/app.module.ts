import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//Pipe
import { ConversorPipe } from './pipes/conversor.pipe';
//Input
import { InputComponent } from './input/input.component';

//directives
import { GigantDirective } from './directives/gigant.directive';
import { HighlightDirective } from './directives/highlight.directive';

//Services
import { TicketService } from './services/ticket.service';

//ngrx
import { StoreModule } from '@ngrx/store';
import  { counterReducer } from './services/counter';



@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    GigantDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    //StoreModule.providerStore({ counter: counterReducer}) segun lo investigado esto solo funciona
    //en la version 2 pero en la version 4 ngrx/store no funciona por eso se paso como esta abajo forRoot
    StoreModule.forRoot({ counter: counterReducer})
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
