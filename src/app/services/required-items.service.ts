import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { RequiredItem } from '../model/required-item';

@Injectable({
  providedIn: 'root'
})
export class RequiredItemsService {
  private url = `${config.api}/api/campsupplies`;

  constructor(private http: HttpClient) { }

  getItems(): Observable<RequiredItem[]> {
    return this.http.get<RequiredItem[]>(this.url);
  }
}