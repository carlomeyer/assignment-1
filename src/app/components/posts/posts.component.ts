import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService, Post } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]> | undefined;
  toggle: boolean[] = [];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService.init();
    this.posts$ = this.postService.getPosts();
  }

  togglePost(index: number) {
    this.toggle[index] = !this.toggle[index];
  }

}
