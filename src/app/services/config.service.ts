import { ConfigSetting } from './../model/config-setting';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment';

@Injectable()
export class ConfigService {
  url = `${environment.apiUrl}/api/config`;

  constructor(private http: HttpClient) { }

  getAllSettings(): Observable<ConfigSetting[]> {
    return this.http.get<ConfigSetting[]>(this.url);
  }
}
