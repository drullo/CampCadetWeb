//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '@environment/environment';
//#endregion

@Injectable()
export class ApplicationsService {
  private url = `${environment.apiUrl}/api/applications`;

  constructor(private http: HttpClient) { }

  getLatest(): Observable<string> {
    return this.http.get<string>(`${this.url}/latest`);
  }
}
