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

  posts: Observable<Post[]> | undefined;

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${environment.api}/posts`);
  }

}
