export class Comment {
  id: string;
  content: string;
  ip: string;
  constructor(id: string, content: string, ip: string) {
    this.id = id;
    this.content = content;
    this.ip = ip;
  }
}
