import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private _url: string = "/assets/mockdata/tickets.json";

  constructor(private http : HttpClient) { }

  getAllTickets() {
    return this.http.get<Ticket[]>(this._url);
  }

  getOpenTickets() {
    return this.http.get<Ticket[]>(this._url)
              //  .pipe(map(res => res.filter((ticket) => ticket.status === "open")));
  }

  getClosedTickets() {
    return this.http.get<Ticket[]>(this._url)
               .pipe(map(res => res.filter((ticket) => ticket.status === "closed")));  }

  getDueTickets() {
    return this.http.get<Ticket[]>(this._url)
               .pipe(map(res => res.filter((ticket) => ticket.status === "due")));  }
}
