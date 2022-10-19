export class Post {
  id?: string;
  Title: string;
  Content: string;
  Tag: string[];
  Category: string[];
}
export class Reference {
  Author: string;
  Title: string;
  Category: string;
  Url: string;
}
export class Update {
  date: any;
  user: string;
}
