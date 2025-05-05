import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../models/product.js';
 
function ProductDetails() {
    const [search, setSearch] = React.useState('');
    const { id } = useParams();
    const product = items.find((product) => product.id === parseInt(id));
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div>
            <nav>
                <nav>Home</nav>
                <nav>About</nav>                
            </nav>
            

            <input type="text" placeholder='Search' className='search' onChange={(e) => setSearch(e.target.value)} />
            <p>{search}</p>
            <h2>Product Details</h2>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default ProductDetails;