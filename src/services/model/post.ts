import { Schema, models, model } from "mongoose";

const postSchema = new Schema({
  author: String,
  cover_img: String,
  author_img: String,
  date: String,
  sub_title: String,
  description: String,
  tags: String,
  title: String,
});

const Posts = models.post || model("post", postSchema);

export default Posts;
