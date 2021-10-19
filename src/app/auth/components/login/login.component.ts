import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  showLoading = false

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.buildForm()
  }

  ngOnInit(): void {
  }

  login(event: Event) {
    if (this.form.valid) {
			this.showLoading = true
			this.form.disable()
			const { email, password } = this.form.value
			this.authService.login(email, password)
        .subscribe(async response => {
          console.log(response);
          this.showLoading = false
          if (response.token) {
            await this.router.navigate(['/booking'])
          }
        })
		}
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(7)]]
    })
  }

  get emailField() {
		return this.form.get('email')
	}

	get passwordField() {
		return this.form.get('password')
	}

}
