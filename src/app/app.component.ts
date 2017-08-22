import { Component, NgZone } from '@angular/core';

import { InputComponent } from './input/input.component';

import { TicketService } from './services/ticket.service';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './services/counter';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Usuario!!';
  votacion = '';
  tickets : any;

  //grupo de datos para nuestro formulario
  myForm : FormGroup;

  counter: Observable<number>;

  constructor(
    private ticketService : TicketService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private _ngZone: NgZone,
    private router: Router
  ) {

    this.counter = store.select('counter');
    this.tickets = ticketService.getTickets();

    //Validamos que el campo name tenga el nombre milton y desde la vista bindeamos el input
    this.myForm = fb.group({
      'name': ['milton']
    });
  }

  votos = [
    {title: 'option 1'},
    {title: 'option 2'}
  ];

  addVoto( response: string) {
    this.votacion = "usted eligio: " + response;
  }

  cantidad = 5;
  factor = 1;

  onSubmit(value: string): void {
    console.log("El formulario tiene", value);
  }

  increment(){
    this.store.dispatch({type: INCREMENT});
  }

  decrement(){
    this.store.dispatch({type: DECREMENT});
  }

  reset(){
    this.store.dispatch({type: RESET});
  }

  progress: number = 0;
  label: string;

  //metodo que no utiliza el ngZone
  processOutsideOfAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(
      () =>{ console.log("finalizado sin ngZone")});
  }

  //metodo que utiliza el ngZone
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(()=> {
      this._increaseProgress(() => {
        this._ngZone.run(() => {console.log("Finalizado con ngZone")})
      })
    })
  }

  _increaseProgress(doneCallBack: () => void) {
    this.progress+= 1;
    console.log(`Progreso: ${this.progress}%`);
    if(this.progress<100) {
      window.setTimeout(() => {
        this._increaseProgress(doneCallBack);
      },10);
    }
    else {
      doneCallBack();
    }
  }

  verTicket(id: number): void {
    this.router.navigate(['/ticket', id]);
  }

}


