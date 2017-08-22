import { Component } from '@angular/core';
//activa los estados de nuestras rutas y revisa los parametros
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
// se devuelve como un parametros y es manejado por Observables
import { Observable } from 'rxjs/Observable';

import { TicketService } from '../services/ticket.service';
import {subscribeOn} from "rxjs/operator/subscribeOn";

@Component({
  selector: 'ticket-detail',
  templateUrl: 'ticket.detail.html'
})

export class TicketDetail {
  //iterable
  ticket: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TicketService
  ){

  }
  //se crear la llamada al servicio que nesecitamos
  //ngOnInit() {
  //  //con el + lo que se hace es castear el parametro a un number
  //  let id = +this.route.snapshot.params['id'];
  //  this.ticket = this.service.getTicket(id);
  //}

  //
  ngOnInit() {
    this.service.getTicketObserver(this.route.snapshot.params['id'])
      .subscribe(ticket=> this.ticket = ticket);
  }
}

