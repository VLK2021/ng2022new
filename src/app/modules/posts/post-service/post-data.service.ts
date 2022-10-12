import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../../../interfaces/IPost";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this
      .httpClient
      .get<IPost[]>(urls.posts);
  }

  getPost(id:number): Observable<IPost> {
    return this
      .httpClient
      .get<IPost>(urls.posts + '/' + id);
  }


}
