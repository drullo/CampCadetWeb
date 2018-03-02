//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { Requirement } from '@campcadet/model/requirement';
//#endregion

@Injectable()
export class RequirementsService {
  private url = `${environment.apiUrl}/api/eligibility`;

  constructor(private http: HttpClient) { }

  getRequirements(): Observable<Requirement[]> {
    return this.http.get<Requirement[]>(this.url);
  }
}
