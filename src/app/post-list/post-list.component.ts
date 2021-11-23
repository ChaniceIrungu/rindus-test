import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() posts!: Array<IPost>;

  showForm: boolean = false;
  createMode: boolean = true;
  updatedPost: IPost = {} as IPost;

  constructor() {}

  ngOnInit(): void {}

  handleEmit(selectedPost: IPost) {
    this.updatedPost = selectedPost;

    this.showForm = true;
    this.createMode = false;
  }

  showCreateForm() {
    this.showForm = true;
    this.createMode = true;
  }

  handleSubmit() {
    if (this.createMode) {
      this.posts.unshift(this.updatedPost);
    } else {
    }

    this.updatedPost = {} as IPost;

    this.showForm = false;
  }

  handleDelete(postId: number) {
    this.posts = this.posts.filter((post) => post.id != postId);
  }

  cancelCreatePost() {
    this.showForm = false;
    this.updatedPost = {} as IPost;
  }
}
