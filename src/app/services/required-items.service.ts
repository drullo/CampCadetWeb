import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequiredItem } from './../model/required-item';

import { environment } from './../../environments/environment';

@Injectable()
export class RequiredItemsService {
  url = `${environment.apiUrl}/api/campsupplies`;

  constructor(private http: HttpClient) { }

  getItems(): Observable<RequiredItem[]> {
    return this.http.get<RequiredItem[]>(this.url);
  }
}
