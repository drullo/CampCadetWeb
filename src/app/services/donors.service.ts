import { DonorLevel } from './../model/donor-level';
import { DonorCategoryLink } from './../model/donor-category-link';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DonorsService {
  url = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }

  getDonorLevels(): Observable<DonorLevel[]> {
    return this.http.get<DonorLevel[]>(`${this.url}/donorlevels`);
  }

  getDonorCategoryLinks(): Observable<DonorCategoryLink[]> {
    return this.http.get<DonorCategoryLink[]>(`${this.url}/donorcatlinks/current`);
  }
}
