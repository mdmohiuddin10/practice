import React from 'react';

const ProductDetails = ({params}) => {
    return (
        <div>
            <h2>Product detqails page {params.productId}</h2>
        </div>
    );
};

export default ProductDetails;