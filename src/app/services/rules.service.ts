import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Rule } from '../model/rule';

@Injectable()
export class RulesService {
  url = 'http://localhost:64476/api/camprules';

  constructor(private http: HttpClient) { }

  getRules(): Observable<Rule[]> {
    return this.http.get<Rule[]>(this.url);
  }
}
