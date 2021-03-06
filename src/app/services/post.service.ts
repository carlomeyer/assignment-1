import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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

  posts: Post[] | undefined;

  constructor(private http: HttpClient) { }

  /**
   * @returns array of posts
   */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.api}/posts`);
  }

}
