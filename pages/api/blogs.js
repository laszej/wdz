import express from 'express';
import { connectToDatabase } from '../../utils/mongodb';
import cors from 'cors';

const app = express();

// Set up CORS options
const corsOptions = {
  origin: '*', // allow requests from all origins
  methods: ['GET'], // only allow GET requests
};

app.use(cors(corsOptions));

app.get('/api/blogs', async (req, res) => {
  const { collection } = req.query;
  const { db } = await connectToDatabase();

  const blogs = await db.collection(collection).find({}).toArray();

  res.status(200).json(blogs);
});

export default app;