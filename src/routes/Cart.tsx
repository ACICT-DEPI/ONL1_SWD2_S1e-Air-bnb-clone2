import React, { useEffect } from 'react'
import CartNav from '../components/Cart/CartNav'
import CartBody from '../components/Cart/CartBody'
import CheckoutSummary from '../components/Cart/CartSummary'
import useCart from '../utils/zustand/UseCart'
import Carousel from '../components/Carousel'

const Cart = () => {
    const { cart, updateCart } = useCart()

    const isCartEmpty = cart.items.length === 0

    return (
        <div className="lg:px-6 px-2 flex flex-col ">
            {isCartEmpty ? (
                <div className="text-center w-full font-bold text-2xl my-10">
                    حقيبة التسوق الخاصة بك فارغة
                </div>
            ) : (
                <>
                    {' '}
                    <CartNav />
                    <div className="flex flex-1 flex-wrap">
                        <div className="w-full bg-white py-3 lg:hidden text-center font-light text-lg sticky top-10 z-50">
                            <span className="font-bold px-2">
                                <span className="px-2">
                                    {cart.items.reduce(
                                        (acc, item) => acc + item.quantity,
                                        0
                                    )}
                                </span>
                                <span> منتج</span>
                            </span>
                            <span> الإجمالي (قبل التوصيل) :</span>
                            <span className="font-bold">
                                {' '}
                                ج.م{cart.totalAmount}
                            </span>
                        </div>

                        <CartBody />
                        <CheckoutSummary />
                    </div>
                </>
            )}

            <div className="xl:max-w-5xl mx-auto">
                <div className="text-2xl font-bold text-center my-6">
                    {isCartEmpty
                        ? 'إليك بعض منتجاتنا المفضلة'
                        : 'منتجات شاهدتها مؤخراً'}
                </div>
                <Carousel category="women" />
                <div className="text-2xl font-bold text-center my-6">
                    منتجات شاهدها الزبائن
                </div>
                <Carousel category="men" />
            </div>
        </div>
    )
}

export default Cart
