import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/IPostInterface";
import {urls} from "../constants/urls";
import {ISinglePostInterface} from "../interfaces/ISinglePostInterface";


@Injectable({
  providedIn: 'root'
})


export class PostService {

  constructor(private httpClient: HttpClient) { };

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts);
  };

  getSinglePost(id: number): Observable<ISinglePostInterface> {
    return this.httpClient.get<ISinglePostInterface>(urls.posts + '/' + id);
  }


}
