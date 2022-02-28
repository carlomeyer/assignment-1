import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = '/assets/mock-data/posts.json';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

}
