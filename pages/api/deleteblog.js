import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    const { db } = await connectToDatabase();
    const result = await db.collection("blogs").deleteOne({ _id: id });
    res.status(200).json({ message: "Blog post deleted successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}