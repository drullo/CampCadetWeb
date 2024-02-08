import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Email } from '../model/email';
import { SimpleItem } from '../model/simple-item';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = `${config.api}/api`;

  constructor(private http: HttpClient) { }

  getContactCategories(): Observable<SimpleItem[]> {
    return this.http.get<SimpleItem[]>(`${this.url}/contactcategories`);
  }

  getContactReasons(): Observable<SimpleItem[]> {
    return this.http.get<SimpleItem[]>(`${this.url}/contactreasoncategories`);
  }

  sendEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(`${this.url}/email`, email);
  }
}