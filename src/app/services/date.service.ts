import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { CampDates } from '../model/camp-dates';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private url = `${config.api}/api/campdates`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<CampDates[]> {
    return this.http.get<CampDates[]>(this.url);
  }

  getCurrent(): Observable<CampDates[]> {
    return this.http.get<CampDates[]>(`${this.url}/current`);
  }

  add(dates: CampDates): Observable<CampDates> {
    return this.http.post<CampDates>(this.url, dates);
  }

  update(dates: CampDates): Observable<CampDates> {
    return this.http.put<CampDates>(this.url, dates);
  }

  delete(dates: CampDates): Observable<CampDates> {
    return this.http.put<CampDates>(`${this.url}/delete`, dates);
  }
}