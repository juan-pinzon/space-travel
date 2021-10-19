import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface token {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = '46d0549e-c361-45b3-90cb-da98e7912f06'

  constructor() { }

  login(email: string, password: string): Observable<token> {
    sessionStorage.setItem("email", email)
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next({ token: this.token })
        subscriber.complete()
      }, 1500)
    })
  }
}
