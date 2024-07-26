require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const MONGODB_URI="mongodb+srv://vercel-admin-user-64137124c857de545799438e:3h46Aoe6Mf6HvMyg@cluster0.37lx3m0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();

  cachedClient = {
    client,
    db,
  };

  return cachedClient;
}

module.exports = { connectToDatabase };