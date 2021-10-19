import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './components/booking/booking.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { SummaryComponent } from './components/summary/summary.component';


@NgModule({
  declarations: [
    BookingComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
