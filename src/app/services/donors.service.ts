import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { DonorCategoryLink } from '../model/donor-category-link';
import { DonorLevel } from '../model/donor-level';

@Injectable({
  providedIn: 'root'
})
export class DonorsService {
  private url = `${config.api}/api`;

  constructor(private http: HttpClient) { }

  getDonorLevels(): Observable<DonorLevel[]> {
    return this.http.get<DonorLevel[]>(`${this.url}/donorlevels`);
  }

  getDonorCategoryLinks(): Observable<DonorCategoryLink[]> {
    return this.http.get<DonorCategoryLink[]>(`${this.url}/donorcatlinks/current`);
  }
}