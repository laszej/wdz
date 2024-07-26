import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;

    try {
      const { db } = await connectToDatabase();

      await db.collection('your_post_collection').deleteOne({ _id: new require('mongodb').ObjectId(id) });

      return res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
      console.error("Error deleting post:", error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};
