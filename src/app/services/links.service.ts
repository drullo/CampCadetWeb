//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { Link } from '@campcadet/model/link';
//#endregion

@Injectable()
export class LinksService {
  private url = `${environment.apiUrl}/api/links`;

  constructor(private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.url);
  }
}
