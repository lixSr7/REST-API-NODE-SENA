import mongoose, {Schema} from "mongoose";
import dotenv from "dotenv";
import { string } from "zod";

dotenv.config();

const uri = process.env.MONGODB_URI;

await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log("Conexión a MongoDB Atlas exitosa");


const PostSchema = new Schema({
  Id: String,
  UserId: Number,
  Content: String,
  ImageURL: String,
  CreateAt: String,
  IsDisable: Boolean,
});
 


const UserSchema = new Schema({
  NickName: String,
  FullName: String,
  PhotoURL: String,
  lastLogin: String,
  Posts: [PostSchema]
});


const PublicationModel = mongoose.model("PublicationModel", UserSchema);

export default PublicationModel;