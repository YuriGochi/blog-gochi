export type Data = {
  posts?: Post[];
};

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  userImg: string;
  posts: Post[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  post: Post[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  title: string;
  subTitle: string;
  body: string;
  userId: string;
  coverImg: string;
  author: User;
  categories: Category[];
  createdAt: Date;
  updatedAt: Date;
}