import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private url = `${config.api}/api/applications`;

  constructor(private http: HttpClient) { }

  getLatest(): Observable<string> {
    return this.http.get<string>(`${this.url}/latest`);
  }
}