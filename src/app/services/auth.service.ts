import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../entities/login-request.model';
import { environment } from '../enviroments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/login`;

  constructor(private http: HttpClient) {}

  login(user: LoginRequest): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      this.apiUrl,
       user,
      { observe: 'response' }
    );
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
