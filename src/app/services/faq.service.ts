import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Faq } from '../model/faq';
import { SimpleItem } from '../model/simple-item';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private http = inject(HttpClient);

  private url = `${config.api}/api`;

  getCategories(): Observable<SimpleItem[]> {
    return this.http.get<SimpleItem[]>(`${this.url}/faqcategories`);
  }

  getFaqs(): Observable<Faq[]> {
    return this.http.get<Faq[]>(`${this.url}/faqs`);
  }
}