//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { DonorLevel } from '@campcadet/model/donor-level';
import { DonorCategoryLink } from '@campcadet/model/donor-category-link';
//#endregion

@Injectable()
export class DonorsService {
  private url = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }

  getDonorLevels(): Observable<DonorLevel[]> {
    return this.http.get<DonorLevel[]>(`${this.url}/donorlevels`);
  }

  getDonorCategoryLinks(): Observable<DonorCategoryLink[]> {
    return this.http.get<DonorCategoryLink[]>(`${this.url}/donorcatlinks/current`);
  }
}
