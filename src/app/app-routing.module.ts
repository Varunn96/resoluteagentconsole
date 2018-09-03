import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { IndividualTicketComponent } from './individual-ticket/individual-ticket.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllticketsComponent } from './tickets/alltickets/alltickets.component';
import { OpenticketsComponent } from './tickets/opentickets/opentickets.component';
import { ClosedticketsComponent } from './tickets/closedtickets/closedtickets.component';
import { DueticketsComponent } from './tickets/duetickets/duetickets.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'tickets',
    component: TicketsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllticketsComponent },
      { path: 'open', component: OpenticketsComponent },
      { path: 'closed', component: ClosedticketsComponent },
      { path: 'due', component: DueticketsComponent }
    ]},
  { path: 'tickets/view/:id', component: IndividualTicketComponent },
  { path: 'newticket', component: NewTicketComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomepageComponent, DashboardComponent, TicketsComponent, IndividualTicketComponent,
  NewTicketComponent, PageNotFoundComponent, AllticketsComponent, OpenticketsComponent, ClosedticketsComponent, DueticketsComponent];
