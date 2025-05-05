import mongoose from 'mongoose';
import dotenv from 'dotenv';
import product from '../models/product.js';
import {process} from '.env';
import module from 'module';

dotenv.config();

const db = process.env.mongo_url || 'mongo_url=mongodb+srv://sanketjadhav31:Sanket%40310@merneval.2jcti9j.mongodb.net/?retryWrites=true&w=majority&appName=merneval';
//add items in mongodb fetch from product.js
const items = product.items;
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});
const Product = mongoose.model('Product', productSchema);
Product.insertMany(items)
    .then(() => console.log('Items added to MongoDB'))
    .catch(err => console.error('Error adding items to MongoDB', err));

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('mongodb connected...'))
    .catch(err => console.error('not connected mongodb...', err));

module.exports = mongoose;

