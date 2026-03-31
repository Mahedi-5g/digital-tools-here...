import React, { use } from 'react';

const Products = ({productPromise}) => {
    const products = use(productPromise)
    console.log(products);
    return (
         <div>
            {products.map(product =><div>
                <p>{product.name}</p>
                <img src={product.icon} alt="" />
            </div>)}
  </div>
)
};

export default Products;