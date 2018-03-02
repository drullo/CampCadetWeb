//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { SimpleItem } from '@campcadet/model/simple-item';
//#endregion

@Injectable()
export class RulesService {
  private url = `${environment.apiUrl}/api/camprules`;

  constructor(private http: HttpClient) { }

  getRules(): Observable<SimpleItem[]> {
    return this.http.get<SimpleItem[]>(this.url);
  }
}
