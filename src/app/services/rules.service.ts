import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SimpleItem } from './../model/simple-item';

import { environment } from './../../environments/environment';

@Injectable()
export class RulesService {
  url = `${environment.apiUrl}/api/camprules`;

  constructor(private http: HttpClient) { }

  getRules(): Observable<SimpleItem[]> {
    return this.http.get<SimpleItem[]>(this.url);
  }
}
