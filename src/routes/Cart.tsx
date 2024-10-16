import React, { useEffect } from 'react'
import CartNav from '../components/Cart/CartNav'
import CartBody from '../components/Cart/CartBody'
import CheckoutSummary from '../components/Cart/CartSummary'
import useCart from '../utils/zustand/UseCart'
import Carousel from '../components/Carousel'

const Cart = () => {
    const { cart, updateCart } = useCart()

    // useEffect(() => {
    //     const items = cart.items
    //     items.push({
    //         productID: 'cm24qg8ko00chu6uwv56fmkh5',
    //         title: 'تي-شيرت بقصة مريحة من القطن',
    //         image: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:3993b9f8-8c23-466c-ac46-8fafd5125a56/as/EID-d02899e9b8d6aa9b65172e133e0eb4b5aa0ed41a.jpg?width=450&height=675&preferwebp=true',
    //         price: 799,
    //         category: 'men',
    //         color: 'أبيض/ أورا آرتيست هاوس',
    //         size: 'XS',
    //         quantity: 1,
    //         amount: 799,
    //     })
    //     updateCart({
    //         items,
    //         totalAmount: cart.items.reduce((acc, item) => acc + item.amount, 0),
    //     })
    // }, [])
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
                <Carousel />
                <div className="text-2xl font-bold text-center my-6">
                    منتجات شاهدها الزبائن
                </div>
                <Carousel />
            </div>
        </div>
    )
}

export default Cart
