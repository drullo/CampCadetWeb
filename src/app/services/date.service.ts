//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { CampDates } from '@campcadet/model/camp-dates';
//#endregion

@Injectable()
export class DateService {
  private url = `${environment.apiUrl}/api/campdates`;

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
