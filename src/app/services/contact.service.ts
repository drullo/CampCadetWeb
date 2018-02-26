import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { SimpleItem } from './../model/simple-item';
import { Email } from './../model/email';

@Injectable()
export class ContactService {
  url = `${environment.apiUrl}/api`;

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
