export class Post {
  id: string;
  title: string;
  content: string;
  ip: string;
  comment: Comment[];
  constructor(id: string, title: string, content: string, ip: string, comment: Comment[]) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.ip = ip;
    this.comment = comment;
  }
}
