import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces/ICommentInterface";
import {urls} from "../constants/urls";
import {ISingleCommentInterface} from "../interfaces/ISingleCommentInterface";


@Injectable({
  providedIn: 'root'
})


export class CommentService {

  constructor(private httpClient: HttpClient) { };

  getAllComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments);
  };

  getComment(id: number): Observable<ISingleCommentInterface> {
    return this.httpClient.get<ISingleCommentInterface>(urls.comments + '/' + id);
  };

}
