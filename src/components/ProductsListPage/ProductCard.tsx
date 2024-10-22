// src/components/ProductCard.tsx

import { Heart } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../routes/WishListContext';
import Alert from '../../routes/Alert';

const Product = ({
  img,
  name,
  price,
  id,
  onAddToCart,
}: {
  img: string;
  name: string;
  price: number;
  id: string;
  onAddToCart?: (id: string) => void;
}) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const isInWishlist = wishlist.some((item) => item.id === id);
  const [isHeartRed, setIsHeartRed] = useState(isInWishlist);

  const handleWishlistClick = () => {
    if (isHeartRed) {
      removeFromWishlist(id);
      setAlertMessage('! Item removed from the wishlist');
    } else {
      addToWishlist({ id, name, image: img, price });
      setAlertMessage('! Item added to the wishlist');
    }
    setIsHeartRed(!isHeartRed);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <div className="relative sm:w-[280px] w-1/2 sm:h-[450px] mb-[55px] px-2 group">
      <div className="flex flex-col h-full">
        <Link to={`/product/${id}`} className="relative hover:scale-105 duration-200">
          <img src={img} alt={name} className="w-full sm:h-[395px] object-cover" />
          <Heart
            strokeWidth={1}
            onClick={(e) => {
              e.preventDefault();
              handleWishlistClick();
            }}
            className={`absolute top-2 left-2 size-[25px] sm:size-[35px] cursor-pointer transition-all duration-300 
              ${isHeartRed ? 'fill-current text-red-500' : 'text-gray-500'} 
              hover:fill-current hover:text-red-500`}
          />
          <button
            onClick={() => onAddToCart?.(id)}
            className="absolute bottom-0 left-0 w-full bg-white text-black font-semibold py-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-full"
            role="button"
            style={{
              borderRadius: '0',
              padding: '10px 0',
            }}
          >
            Add to Cart
          </button>
        </Link>
        <div className="flex flex-col text-sm mt-4 sm:mt-auto">
          <p className="whitespace-nowrap overflow-hidden">{name}</p>
          <p>{`${price.toFixed(2)} ج.م`}</p>
        </div>
      </div>

      {showAlert && <Alert message={alertMessage} />}
    </div>
  );
};

export default Product;
