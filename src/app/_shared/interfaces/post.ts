export interface Post {
  id?: string;
  Title: string;
  Content: string;
  Tag: string[];
  Category: string[];
}
export interface Reference {
  Author: string;
  Title: string;
  Category: string;
  Url: string;
}
export interface Update {
  date: any;
  user: string;
}
