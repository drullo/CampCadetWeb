import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { ConfigSetting } from '../model/config-setting';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private http = inject(HttpClient);

  private url = `${config.api}/api/config`;

  getAllSettings(): Observable<ConfigSetting[]> {
    return this.http.get<ConfigSetting[]>(this.url);
  }
}