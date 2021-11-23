import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/post.interface';
import { IComment } from '../interfaces/comment.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css'],
})
export class PostListItemComponent implements OnInit {
  @Input() post!: IPost;

  @Output() itemClicked = new EventEmitter();

  @Output() itemDeleted = new EventEmitter();

  commentsList: Array<IComment> = [];
  showComments: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPostComments(this.post.id);
  }

  handleClick() {
    this.itemClicked.emit(this.post);
  }

  handleDelete() {
    this.itemDeleted.emit(this.post.id);
  }

  getPostComments(postId: number) {
    this.http
      .get<Array<IComment>>(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      )
      .subscribe((response) => {
        this.commentsList = response;
      });
  }

  showCommentsTab() {
    this.showComments = true;
  }
}
