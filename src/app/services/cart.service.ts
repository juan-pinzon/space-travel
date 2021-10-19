import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private bookings:any = []
  private cart = new BehaviorSubject<any[]>([])

  cart$ = this.cart.asObservable()

  constructor() { }

  addBooking(booking: any) {
    this.bookings = [...this.bookings, booking]
    this.cart.next(this.bookings)
  }
}
