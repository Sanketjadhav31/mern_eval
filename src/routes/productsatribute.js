import express from 'express';
import { getProductsAtribute } from '../controllers/productsatribute.js';
import { getProductDetails } from '../controllers/productDetails.js';

const router = express.Router();

router.get('/', getProductsAtribute);
router.get('/:id', getProductDetails);
 const newProduct = {
    id: 1,
    name: 'laptop',
    description: 'bets seller',
    price: 1000,
    image: 'https://laptop.com/laptop.jpg',
};
const products = [newProduct];
router.get('/products', (req, res) => {
    res.json(products);
});
router.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'product not avlaible' });
    }
    res.json(product);
});

router.post('/',async (req, res) => {
    const newProduct = req.body;
    if (!newProduct) {
        return res.status(400).json({ message: 'product not avlaible' });
    }
    if (!newProduct.name||!newProduct.description||!newProduct.price) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }
    if (newProduct.price < 0) {
        return res.status(400).json({ message: 'Price mustbe greater than 0' });
    }
    res.status(201).json(newProduct);
});
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'product not avlaible' });
    }
    products.splice(productIndex, 1);
    res.status(204).send();   
    return res.status(200).json({message: 'product deleted'}); 
})
export default router;

