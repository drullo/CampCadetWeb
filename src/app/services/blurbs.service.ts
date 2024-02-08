import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Blurb } from '../model/blurb';

@Injectable({
  providedIn: 'root'
})
export class BlurbsService {
  private url = `${config.api}/api/blurbs`;

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

  update(blurb: Blurb): Observable<any> {
    return this.http.put<any>(`${this.url}/${blurb.id}`, blurb);
  }
}