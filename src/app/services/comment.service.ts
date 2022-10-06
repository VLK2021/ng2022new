import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment, IPost} from "../interfaces";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<IComment[]> {
    return this
      .http
      .get<IComment[]>(urls.comments);
  }

  getComment(id: number): Observable<IComment> {
    return this
      .http
      .get<IComment>(urls.comments + '/' + id);
  }

}
