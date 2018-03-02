//#region Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { BoardMember } from '@campcadet/model/board-member';
//#endregion

@Injectable()
export class BoardService {
  private url = `${environment.apiUrl}/api/members`;

  constructor(private http: HttpClient) { }

  getMembers(): Observable<BoardMember[]> {
    return this.http.get<BoardMember[]>(this.url);
  }

  getDirectors(): Observable<BoardMember[]> {
    return this.http.get<BoardMember[]>(`${this.url}/directors`);
  }
}
