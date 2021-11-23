import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postList: Array<IPost> = [];
  searchTerm = '';
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Array<any>>(this.url).subscribe((response) => {
      this.postList = response;
    });
  }

  filterPosts(query: string): Array<IPost> {
    if (query) {
      return this.postList.filter(
        (post) =>
          post.body.includes(this.searchTerm) ||
          post.title.includes(this.searchTerm)
      );
    }

    return this.postList;
  }

  searchPosts() {
    this.postList = this.filterPosts(this.searchTerm);
  }
}
