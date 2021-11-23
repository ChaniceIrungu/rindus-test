import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../interfaces/comment.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  @Input() comments!: Array<IComment>;

  updatedComment: IComment = {} as IComment;
  createMode: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    this.comments.unshift(this.updatedComment);
    this.updatedComment = {} as IComment;
  }

  handleEmit(selectedComment: IComment) {
    this.updatedComment = selectedComment;
    this.createMode = false;
  }

  handleDelete(commentId: number) {
    this.comments = this.comments.filter((comment) => comment.id != commentId);
  }
}
