import { Component, OnDestroy } from '@angular/core';
import { LoginRequestDto } from '../../../model/login-request.model'
import { AuthService } from '../../../services/auth.service'
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  private addSubscription?: Subscription;
  model: LoginRequestDto;

  constructor(private service: AuthService, private cookieService: CookieService, private router: Router) {
    this.model = {
      email: '',
      password: ''
    }
  }

  onFormSubmit(): void {
    this.service.login(this.model).subscribe({
      next: (response) => {
        console.log(response.data.email)
        console.log(response.data.roles)
        this.cookieService.set('Authorization', `Bearer ${response.data.jwToken}`, undefined, '/', undefined, true, 'Strict');
        
        this.service.setUser({
          email: response.data.email,
          roles: response.data.roles
        })
        
        this.router.navigateByUrl('../../../views/dashboard')
      }
    })
  }

  ngOnDestroy(): void {
    this.addSubscription?.unsubscribe();
  }
}
