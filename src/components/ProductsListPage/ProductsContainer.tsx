// src/components/ProductsListPage/ProductsContainer.tsx
import React, { useState } from 'react';
import Product from './ProductCard';
import { WishlistItem } from '../../routes/WishListContext'; // Adjust the path as necessary

const ProductsContainer = ({
  products,
  onAddToCart,
}: {
  products: WishlistItem[]; // Make sure this matches the WishlistItem type
  onAddToCart: (id: string) => void;
}) => {
  const [productsNumber, setProductsNumber] = useState(10);

  const loadMore = () => {
    setProductsNumber(productsNumber + 10);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center xl:justify-start mt-5">
        {products.slice(0, productsNumber).map((product) => (
          <Product
            key={product.id}
            img={product.image}
            name={product.name}
            price={product.price}
            id={product.id}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      {products.length > productsNumber && (
        <div className="w-full items-center justify-center flex">
          <button
            onClick={loadMore}
            className="w-fit mx-auto text-center text-white bg-black px-10 py-1"
          >
            Load More Products
          </button>
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
