import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequestDto } from '../model/login-request.model';
import { LoginResponsetDto } from '../model/login-response.model';
import { User } from '../model/user.model';
import { environment } from '../../environments/environment'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    $user = new BehaviorSubject<User | undefined>(undefined);

    constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

    login(request: LoginRequestDto): Observable<LoginResponsetDto> {
        return this.httpClient.post<LoginResponsetDto>(`${environment.apiBaseUrl}/Account/authenticate`, {
            email: request.email,
            password: request.password
        });
    }

    setUser(user: User): void {
        this.$user.next(user);
        localStorage.setItem('user-email', user.email)
        localStorage.setItem('user-roles', user.roles.join(','))
    }

    user(): Observable<User | undefined> {
        return this.$user.asObservable();
    }

    getUser(): User | undefined {
        const email = localStorage.getItem('user-email');
        const roles = localStorage.getItem('user-roles');

        if (email && roles) {
            const user: User = {
                email: email,
                roles: roles.split(',')
            }
            return user;
        }
        return undefined;
    }

    logout(): void {
        localStorage.clear();
        this.cookieService.delete('Authorization', '/');
        this.$user.next(undefined);
    }
}