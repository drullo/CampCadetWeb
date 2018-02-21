import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarouselService {
  rootUrl = 'http://localhost:64476';
  url = `${this.rootUrl}/api/images/banner`;

  constructor(private http: HttpClient) { }

  getBannerImages(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
