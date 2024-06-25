
import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json({limit:'50mb'}));
app.use(cors());

app.use('/posts', postRoutes);





const CONNECTION_URL = 'mongodb+srv://user1:user1234@cluster0.dxi8aa0.mongodb.net/DB?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);