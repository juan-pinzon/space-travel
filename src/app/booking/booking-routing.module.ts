import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingComponent} from "./components/booking/booking.component";
import {LayoutComponent} from "../components/layout/layout.component";
import {SummaryComponent} from "./components/summary/summary.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: BookingComponent
      },
      {
        path: 'summary',
        component: SummaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
