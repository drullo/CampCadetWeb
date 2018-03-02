//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
//#endregion

@Injectable()
export class CarouselService {
  private url = `${environment.apiUrl}/api/images/banner`;

  constructor(private http: HttpClient) { }

  /*getBannerImages(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }*/

  getLandscapeImages(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/landscape`);
  }

  getPortraitImages(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/portrait`);
  }
}
