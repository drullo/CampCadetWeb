import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Link } from '../model/link';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private http = inject(HttpClient);

  private url = `${config.api}/api/links`;

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.url);
  }
}