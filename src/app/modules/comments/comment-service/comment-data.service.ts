import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../../../interfaces/IComment";
import {urls} from "../../../constants";


@Injectable({
  providedIn: 'root'
})

export class CommentDataService {

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<IComment[]>{
    return this
      .httpClient
      .get<IComment[]>(urls.comments);
  }

  getComment(id:number): Observable<IComment>{
    return this
      .httpClient
      .get<IComment>(urls.comments + '/' + id);
  }
}
