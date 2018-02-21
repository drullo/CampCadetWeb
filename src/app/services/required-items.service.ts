import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequiredItem } from '../model/required-item';

@Injectable()
export class RequiredItemsService {
  url = 'http://localhost:64476/api/campsupplies';

  constructor(private http: HttpClient) { }

  getItems(): Observable<RequiredItem[]> {
    return this.http.get<RequiredItem[]>(this.url);
  }
}
