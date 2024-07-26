import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { collection } = req.query;

    if (!collection) {
      return res.status(400).json({ error: 'Collection not specified' });
    }

    try {
      const { db } = await connectToDatabase();

      const posts = await db.collection(collection).find({}).toArray();

      return res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

