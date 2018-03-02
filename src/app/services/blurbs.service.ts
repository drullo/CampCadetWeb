import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Blurb } from '@campcadet/model/blurb';

import { environment } from '@environment/environment';

@Injectable()
export class BlurbsService {
  url = `${environment.apiUrl}/api/blurbs`;

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
