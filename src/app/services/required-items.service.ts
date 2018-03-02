//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { RequiredItem } from '@campcadet/model/required-item';
//#endregion

@Injectable()
export class RequiredItemsService {
  private url = `${environment.apiUrl}/api/campsupplies`;

  constructor(private http: HttpClient) { }

  getItems(): Observable<RequiredItem[]> {
    return this.http.get<RequiredItem[]>(this.url);
  }
}
