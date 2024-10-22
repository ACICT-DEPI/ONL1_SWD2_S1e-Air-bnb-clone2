import React from 'react';
import { useWishlist } from './WishListContext'; // استخدام السياق السليم
import Product from '../components/ProductsListPage/ProductCard';// استيراد بطاقة المنتج

const WishList = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
