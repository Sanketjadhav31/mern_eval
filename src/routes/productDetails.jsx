import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../models/product.js';

 
function ProductDetails() {
    const [search, setSearch] = React.useState('');
    setSearch(items.filter((items) => items.name.toLowerCase().includes(search.toLowerCase())));
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
         <div>{items.map ((product) => (
            <div key={product.id} className='product-details'>
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button className='btn'>Add to Cart</button>
            </div>
         ))}

         </div>

        </div>
    );
}

export default ProductDetails;