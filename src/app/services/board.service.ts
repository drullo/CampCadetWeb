import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { BoardMember } from '../model/board-member';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private http = inject(HttpClient);

  private url = `${config.api}/api/members`;

  getMembers(): Observable<BoardMember[]> {
    return this.http.get<BoardMember[]>(this.url);
  }

  getDirectors(): Observable<BoardMember[]> {
    return this.http.get<BoardMember[]>(`${this.url}/directors`);
  }
}