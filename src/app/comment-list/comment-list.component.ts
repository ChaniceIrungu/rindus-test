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

  constructor() {}

  ngOnInit(): void {}

  handleEmit(selectedComment: IComment) {
    this.updatedComment = selectedComment;
  }

  handleDelete(commentId: number) {
    this.comments = this.comments.filter((comment) => comment.id != commentId);
  }
}
