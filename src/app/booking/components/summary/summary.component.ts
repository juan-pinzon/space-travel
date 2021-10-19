import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  bookings$!: Observable<any[]>

  constructor(
    private cartService: CartService
  ) {
    this.bookings$ = this.cartService.cart$
  }

  ngOnInit(): void {
  }

}
