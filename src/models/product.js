import React from 'react';
import { useParams } from 'react-router-dom';

import { items } from '../models/product.js';

export const items = [
    {
        id: 1,
        name: 'laptop',
        description: 'best seller',
        price: 1000,
        image: 'https://laptop.com/laptop.jpg',
    },
    {
        id: 2,
        name: 'mobile',
        description: 'best seller',
        price: 1000,
        image: 'https://mobile.com/mobile.jpg',
    },
    {
        id: 3,
        name: 'tv',
        description: 'best seller',
        price: 1000,
        image: 'https://tv.com/tv.jpg',
    },
    {
        id: 4,
        name: 'tablet',
        description: 'best seller',
        price: 1000,
        image: 'https://tablet.com/tablet.jpg', 
    }
];