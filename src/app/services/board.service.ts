import { BoardMember } from '@campcadet/model/board-member';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BoardService {
  url = `${environment.apiUrl}/api/members`;

  constructor(private http: HttpClient) { }

  getMembers(): Observable<BoardMember[]> {
    return this.http.get<BoardMember[]>(this.url);
  }

  getDirectors(): Observable<BoardMember[]> {
    return this.http.get<BoardMember[]>(`${this.url}/directors`);
  }
}
