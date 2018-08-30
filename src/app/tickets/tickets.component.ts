import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  allTickets : Ticket[];
  openTickets : Ticket[];
  closedTickets : Ticket[];
  dueTickets : Ticket[];
  constructor(private service : TicketsService) { }

  ngOnInit() {
    this.service.getAllTickets().subscribe(data => this.allTickets = data);
    this.service.getOpenTickets().subscribe(data => this.openTickets = data);
    this.service.getClosedTickets().subscribe(data => this.closedTickets = data);
    this.service.getDueTickets().subscribe(data => this.dueTickets = data);
  }

}
