import React from 'react';
import { ShoppingBag } from 'lucide-react'; // Import your cart icon
import useCart from '../../utils/zustand/UseCart'; // Import cart state

const CartIcon = () => {
    const { cart } = useCart(); // Access the cart state

    // Calculate the total number of items in the cart
    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="relative">
            <ShoppingBag size={35} strokeWidth={1} className="light" />
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
