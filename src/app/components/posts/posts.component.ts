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
    // get posts from api
    this.getPosts();
  }

  getPosts() {

    this.postService.getPosts().subscribe((data: Post[]) => {

      // set results in service variable
      this.postService.posts = data;

    }, error => {
      console.log(error);
    });

  }

  togglePost(index: number) {
    // set toggle array of indexes to true or false, based on index
    this.toggle[index] = !this.toggle[index];
  }

}
