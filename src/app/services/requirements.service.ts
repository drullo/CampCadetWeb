import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Requirement } from '../model/requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {
  private url = `${config.api}/api/eligibility`;

  constructor(private http: HttpClient) { }

  getRequirements(): Observable<Requirement[]> {
    return this.http.get<Requirement[]>(this.url);
  }
}