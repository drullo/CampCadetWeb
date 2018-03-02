//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { Faq } from '@campcadet/model/faq';
import { SimpleItem } from '@campcadet/model/simple-item';
//#endregion

@Injectable()
export class FaqService {
  private url = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<SimpleItem[]> {
    return this.http.get<SimpleItem[]>(`${this.url}/faqcategories`);
  }

  getFaqs(): Observable<Faq[]> {
    return this.http.get<Faq[]>(`${this.url}/faqs`);
  }
}
