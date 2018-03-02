import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CampDates } from '@campcadet/model/camp-dates';
import { environment } from '@environment/environment';
@Injectable()
export class DateService {
  url = `${environment.apiUrl}/api/campdates`;

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
