import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CampDates } from './../model/camp-dates';
import { environment } from './../../environments/environment';
@Injectable()
export class DateService {
  url = `${environment.apiUrl}/api/campdates`;

  constructor(private http: HttpClient) { }

  getCurrent(): Observable<CampDates[]> {
    return this.http.get<CampDates[]>(`${this.url}/current`);
  }
}
