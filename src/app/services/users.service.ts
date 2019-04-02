import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getuserById(id: string) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }
  putUserAfterEdite(id: string) {
    return this.http.put(`${this.apiUrl}/users/${id}`, id );
  }
}
