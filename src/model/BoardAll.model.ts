import { Post } from "./Post.model";

export class BoardAll {
  prov: string;
  next: string;
  posts: Post[];
  pageAll: number;
  count: number;
  constructor(prov: string, next: string, posts: Post[], pageAll: number, count: number) {
    this.prov = prov;
    this.next = next;
    this.posts = posts;
    this.pageAll = pageAll;
    this.count = count;
  }
}
