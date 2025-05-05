import mongoose from 'mongoose';
import dotenv from 'dotenv';
import evn from 'env';

require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = process.env.mongo_url || 'mongo_url=mongodb+srv://sanketjadhav31:Sanket%40310@merneval.2jcti9j.mongodb.net/?retryWrites=true&w=majority&appName=merneval';

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('mongodb connected...'))
    .catch(err => console.error('not connected mongodb...', err));

module.exports = mongoose;

