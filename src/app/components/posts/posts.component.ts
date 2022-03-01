import { Component, OnInit } from '@angular/core';
import { PostService, Post } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  toggle: boolean[] = [];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {

    this.postService.getPosts().subscribe((data: Post[]) => {

      this.postService.posts = data;

    }, error => {
      console.log(error);
    });

  }

  togglePost(index: number) {
    this.toggle[index] = !this.toggle[index];
  }

}
