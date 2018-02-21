import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Blurb } from '../model/blurb';

@Injectable()
export class BlurbsService {
  url = 'http://localhost:64476/api/blurbs';

  constructor(private http: HttpClient) { }

  getBlurbs(): Observable<Blurb[]> {
    return this.http.get<Blurb[]>(this.url);
  }

  getBlurb(id: number): Observable<Blurb> {
    return this.http.get<Blurb>(`${this.url}/${id}`);
  }

  getBlurbByName(name: string): Observable<Blurb> {
    return this.http.get<Blurb>(`${this.url}/name/${name}`);
  }
}
