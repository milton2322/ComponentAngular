import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock';

@Injectable()
export class TicketService {

  miVariableTicketGlobal = "Soy una variable global";

  //Nos tomara todos nuestros tickets
  getTicket() {
    return TICKETS;
  }

  getVariableGlobal(): string {
    return this.miVariableTicketGlobal;
  }
}
