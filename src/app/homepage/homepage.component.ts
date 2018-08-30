import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  totalNumberOfTickets;
  numberOfOpenTickets;
  numberOfClosedTickets;
  numberOfDueTickets;

  constructor(private service : TicketsService) { }

  ngOnInit() {
    this.service.getAllTickets().subscribe(data => this.totalNumberOfTickets = data.length);
    this.service.getOpenTickets().subscribe(data => this.numberOfOpenTickets = data.length);
    this.service.getClosedTickets().subscribe(data => this.numberOfClosedTickets = data.length);
    this.service.getDueTickets().subscribe(data => this.numberOfDueTickets = data.length);
  }
}
