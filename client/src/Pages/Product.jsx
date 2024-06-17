import React from 'react';
import { useParams } from 'react-router-dom';
import ProductHd from '../components/ProductHd';
import all_products from '../assets/all_products.js';
import ProductDisplay from '../components/ProductDisplay.jsx';
import PopularProducts from '../components/PopularProducts.jsx';
import ProductDiscription from '../components/ProductDiscription.jsx';

const Product = () => {
  const { productId } = useParams();
  console.log("productId:", productId);

  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div className="">Product not found</div>;
  }

  return (
    <section>
      <div className="">
        <ProductHd product={product} />
        <ProductDisplay product={product}/>
        <ProductDiscription/>
        <PopularProducts/>
      </div>
    </section>
  );
};

export default Product;
