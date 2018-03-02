import { Faq } from '@campcadet/model/faq';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SimpleItem } from '@campcadet/model/simple-item';

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
