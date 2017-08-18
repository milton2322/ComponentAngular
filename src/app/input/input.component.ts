import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-component',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css']
})
export class InputComponent {
  @Input() voto:string;
  //esto lo que nos dice que el addVoto tendra un evento de tipo string
  @Output() addVoto = new EventEmitter<string>();

  constructor() {
    console.log("estoy entrando");
  }
  //esta funcion votar lo que hace es ejecutar el EventEmitter
  votar():void {
    this.addVoto.emit(this.voto);
  }
}
