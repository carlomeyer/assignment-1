import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Posts = [];
  toggle: boolean[] = [];

  constructor(public postService: PostService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {

    this.postService.getPosts().subscribe((data: Posts) => {

      this.posts = data;

    }, error => {
      console.log(error);
    });

  }

  togglePost(index: number) {
    this.toggle[index] = !this.toggle[index];
  }

}
