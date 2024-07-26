require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { connectToDatabase } = require('./utils/mongodb');

const app = express();
const port = process.env.NEXT_PUBLIC_SOCKET_PORT || 3001;

app.use(cors());

// Proxy requests to /api to the API server running on port 3000
app.use('/api/messages', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
});

const startServer = async () => {
  try {
    const { db } = await connectToDatabase();

    io.on('connection', (socket) => {
      console.log(`User ${socket.id} connected`);
    
      socket.on('newMessage', async (message) => {
        console.log(`New message: ${message.message}`);
        try {
          const result = await db
            .collection('messages')
            .insertOne({ message: message.message });
          if (!result || !result.ops || !result.ops.length) {
            console.error('Failed to save message to database: invalid result', result);
            return;
          }
          console.log(`Insertion result: ${result}`);
          const savedMessage = result.ops[0];
          io.emit('newMessage', savedMessage);
        } catch (error) {
          console.error('Failed to save message to database', error);
        }
      });
    
      socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected`);
      });
    });
   
    
    
  } catch (error) {
    console.error('Failed to connect to database', error);
  }
};

startServer();