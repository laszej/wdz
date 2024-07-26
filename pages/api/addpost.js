
import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, collection } = req.body;

    if (!title || !content || !collection) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    try {
      const { db } = await connectToDatabase();

      const result = await db.collection(collection).insertOne({ title, content });
      
      return res.status(200).json({ message: 'Post added', result });
    } catch (error) {
      console.error("Error adding post:", error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};
