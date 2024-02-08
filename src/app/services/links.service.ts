import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Link } from '../model/link';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private url = `${config.api}/api/links`;

  constructor(private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.url);
  }
}