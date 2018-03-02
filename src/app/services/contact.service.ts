//#region Imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { SimpleItem } from '@campcadet/model/simple-item';
import { Email } from '@campcadet/model/email';
//#endregion

@Injectable()
export class ContactService {
  private url = `${environment.apiUrl}/api`;

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
