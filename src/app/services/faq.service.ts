import { Faq } from './../model/faq';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SimpleItem } from '../model/simple-item';

@Injectable()
export class FaqService {
  url = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<SimpleItem[]> {
    return this.http.get<SimpleItem[]>(`${this.url}/faqcategories`);
  }

  getFaqs(): Observable<Faq[]> {
    return this.http.get<Faq[]>(`${this.url}/faqs`);
  }
}
