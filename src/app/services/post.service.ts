import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

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

  private posts$ = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  public init(): void {
    this.http.get<Post[]>(`${environment.api}/posts`).subscribe((posts) => {
      this.posts$.next(posts);
    });
  }

  public getPosts(): Observable<Post[]> {
    return this.posts$;
  }

}
