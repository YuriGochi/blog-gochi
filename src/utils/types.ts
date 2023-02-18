export type Data = {
  posts?: Post[];
};

export type Post = {
  _id: string;
  author?: string;
  author_img?: string;
  cover_img?: string;
  date?: string;
  sub_title?: string;
  description?: string;
  tags?: string;
  title?: string;
};
