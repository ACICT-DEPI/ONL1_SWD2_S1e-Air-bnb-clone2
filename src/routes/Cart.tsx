import React from 'react'
import CartNav from '../components/Cart/CartNav'
import CartBody from '../components/Cart/CartBody'
import CheckoutSummary from '../components/Cart/CartSummary'

const Cart = () => {
    return (
        <div className="lg:px-6 px-2 flex flex-col ">
            <CartNav />
            <div className="flex flex-1 flex-wrap">
                <div className="w-full bg-white py-3 lg:hidden text-center font-light text-lg sticky top-10 z-50">
                    <span className="font-bold">2 منتج</span> الإجمالي (قبل
                    التوصيل) : <span className="font-bold"> ج.م3,898.00</span>
                </div>
                <CartBody />
                <CheckoutSummary />
            </div>
        </div>
    )
}

export default Cart
