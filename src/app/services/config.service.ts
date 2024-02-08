import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { ConfigSetting } from '../model/config-setting';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private url = `${config.api}/api/config`;

  constructor(private http: HttpClient) { }

  getAllSettings(): Observable<ConfigSetting[]> {
    return this.http.get<ConfigSetting[]>(this.url);
  }
}