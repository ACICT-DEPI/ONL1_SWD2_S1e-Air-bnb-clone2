import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../routes/WishListContext'; // Access wishlist context
import CartIcon from './CartIcon'; // Your custom cart icon component

const Actions = () => {
    const { wishlist } = useWishlist(); // Get wishlist items
    const wishlistCount = wishlist.length; // Count of items in wishlist

    return (
        <div className="flex min-w-fit gap-7 font-light items-center justify-end w-1/4 sm:order-3 order-2 lg:order-none">
            {/* Wishlist Icon with Counter */}
            <Link to="/wishlist" className="relative">
                <Heart size={35} strokeWidth={1} className="cursor-pointer" />
                {wishlistCount > 0 && (
                    <span
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full 
                        w-5 h-5 text-xs flex items-center justify-center font-bold"
                    >
                        {wishlistCount}
                    </span>
                )}
            </Link>

            {/* Cart Icon */}
            <Link to="/cart">
                <CartIcon />
            </Link>
        </div>
    );
};

export default Actions;
