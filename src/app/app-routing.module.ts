import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { IndividualTicketComponent } from './individual-ticket/individual-ticket.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'tickets/:id', component: IndividualTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomepageComponent, DashboardComponent, TicketsComponent, IndividualTicketComponent];
