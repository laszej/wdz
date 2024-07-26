import { connectToDatabase } from '../../utils/mongodb';


export default async function handler(req, res) {
  const { title, content, collection } = req.body;

  if (!title || !content || !collection) {
    return res.status(422).json({ message: 'Invalid input' });
  }

  try {
    const { db } = await connectToDatabase();

    const result = await db.collection(collection).insertOne({
      title,
      content,
    });

    res.status(201).json({
      message: 'Blog added!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not add blog' });
  }
}