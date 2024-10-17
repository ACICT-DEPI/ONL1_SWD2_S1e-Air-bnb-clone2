import React from 'react'
import { Heart, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'
const Actions = () => {
    return (
        <div className="flex min-w-fit gap-7 font-light items-center justify-end  w-1/4 sm:order-3 order-2 lg:order-none">
            <Link to="/wishlist">
                <Heart size={35} strokeWidth={1} />
            </Link>{' '}
            <Link to="/cart">
                <CartIcon />
            </Link>
        </div>
    )
}

export default Actions
