// Seed the database with sample users and chats.
//   node seed.js users 10
//   node seed.js chats 5
import dotenv from "dotenv";
import mongoose from "mongoose";
import { createUser } from "./seeders/user.js";
import { createGroupChats, createSingleChats } from "./seeders/chat.js";

dotenv.config({ path: "./.env" });

const [what = "users", count = "10"] = process.argv.slice(2);

await mongoose.connect(process.env.MONGO_URI, { dbName: "Chattu" });
console.log("connected");

if (what === "users") await createUser(Number(count));
else if (what === "chats") {
  await createSingleChats(Number(count));
  await createGroupChats(Number(count));
}
