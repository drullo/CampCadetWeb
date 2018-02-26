import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Link } from './../model/link';

@Injectable()
export class LinksService {
  url = `${environment.apiUrl}/api/links`;

  constructor(private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.url);
  }
}
