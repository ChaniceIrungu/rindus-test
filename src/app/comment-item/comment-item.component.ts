import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IComment } from './../interfaces/comment.interface';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment!: IComment;

  @Output() commentEdit = new EventEmitter();

  @Output() commentDeleted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleEdit() {
    this.commentEdit.emit(this.comment);
  }

  handleDelete() {
    this.commentDeleted.emit(this.comment.id);
  }
}
