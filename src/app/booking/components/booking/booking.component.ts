import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {BookingService} from "../../booking.service";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  locations!: any[]
  passengers = [1, 2, 3, 4, 5]
  form!: FormGroup

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService, private cartService: CartService, private router: Router) {
    this.formBuild()
  }

  ngOnInit(): void {
    this.getLocations()
  }

  async saveBooking(event: Event) {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.cartService.addBooking(this.form.value)
      await this.router.navigate(['/booking/summary'])
    }
  }

  private getLocations() {
    this.bookingService.getLocations().subscribe((data: any) => {
      this.locations = data
    })
  }

  private formBuild() {
    this.form = this.formBuilder.group({
      destination: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      departureDate: ['', Validators.required],
      passengers: ['', Validators.required]
    })
  }

  get destinationField() {
    return this.form.get('destination')
  }

  get arrivalDateField() {
    return this.form.get('arrivalDate')
  }

  get departureDateField() {
    return this.form.get('departureDate')
  }

  get passengersField() {
    return this.form.get('passengers')
  }

}
