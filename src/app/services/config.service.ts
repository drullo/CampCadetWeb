//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { ConfigSetting } from '@campcadet/model/config-setting';
//#endregion

@Injectable()
export class ConfigService {
  private url = `${environment.apiUrl}/api/config`;

  constructor(private http: HttpClient) { }

  getAllSettings(): Observable<ConfigSetting[]> {
    return this.http.get<ConfigSetting[]>(this.url);
  }
}
