import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: 'postlist.component.html'
})
export class PostlistComponent implements OnInit {
  constructor() {}
  //   posts: [{ post_title: string; post_body: string }] = [
  posts = [];
  ngOnInit() {}
}
