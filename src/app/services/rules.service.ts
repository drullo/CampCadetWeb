import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { SimpleItem } from '../model/simple-item';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  private http = inject(HttpClient);

  private url = `${config.api}/api/camprules`;

  getRules(): Observable<SimpleItem[]> {
    return this.http.get<SimpleItem[]>(this.url);
  }
}