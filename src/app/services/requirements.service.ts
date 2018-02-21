import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Requirement } from '../model/requirement';

@Injectable()
export class RequirementsService {
  url = 'http://localhost:64476/api/eligibility';

  constructor(private http: HttpClient) { }

  getRequirements(): Observable<Requirement[]> {
    return this.http.get<Requirement[]>(this.url);
  }
}
