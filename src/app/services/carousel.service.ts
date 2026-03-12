import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private http = inject(HttpClient);

  private url = `${config.api}/api/images/banner`;

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