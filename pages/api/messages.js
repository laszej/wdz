import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { db } = await connectToDatabase();
      const messages = await db.collection("messages").find().toArray();
      res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  } else if (req.method === "POST") {
    try {
      const { db } = await connectToDatabase();
      const savedMessage = { message: req.body.message };
      const result = await db.collection("messages").insertOne(savedMessage);
      res.status(201).json(savedMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
}