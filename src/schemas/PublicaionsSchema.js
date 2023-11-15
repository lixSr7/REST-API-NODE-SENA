import mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
  Id: Number,
  UserId: Number,
  Content: String,
  ImageURL: String,
  CreateAt: String,
  IsDisable: Boolean,
});

export const UserSchema = new mongoose.Schema({
  Id: Number,
  NickName: String,
  FullName: String,
  PhotoURL: String,
  lastLogin: String,
  Posts: [PostSchema],
});

