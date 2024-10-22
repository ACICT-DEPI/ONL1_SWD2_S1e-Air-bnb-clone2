// src/routes/WishList.tsx
import React from 'react';
import { useWishlist } from './WishListContext';
import ProductsContainer from '../components/ProductsListPage/ProductsContainer';
import Carousel from '../components/Carousel';

const WishList = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="p-10">
      <h2 className="text-4xl font-extrabold mb-8">
        Your Wishlist ({wishlist.length})
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-lg">No items in your wishlist.</p>
      ) : (
        <ProductsContainer products={wishlist} onAddToCart={(id) => console.log(`Added product ID: ${id} to cart`)} />
      )}

      <h2 className="text-3xl font-extrabold mt-16 mb-6">You may like</h2>
      <Carousel />
    </div>
  );
};

export default WishList;
