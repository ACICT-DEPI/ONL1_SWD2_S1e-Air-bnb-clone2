import React from 'react'
import { CreditCard, Truck, Clock, Package } from 'lucide-react'
import useCart from '../../utils/zustand/UseCart'
import axios from 'axios'

const CheckoutSummary: React.FC = () => {
    const { cart, updateCart } = useCart()
    const saveOrder = async () => {
        try {
            const token = localStorage.getItem('token')

            const response = await axios.post(
                'https://h-m-server.vercel.app/api/user/add-order',
                {
                    order: {
                        items: cart.items.map((item) => ({
                            productId: item.productID,
                            quantity: item.quantity,
                        })),
                        amount: cart.totalAmount,
                    },
                },
                {
                    headers: {
                        authorization: 'Bearer ' + token,
                    },
                }
            )
            if (response.status === 200) {
                console.log('Order saved successfully')
                updateCart({ items: [], totalAmount: 0 })
            } else {
                console.log('Failed to save order')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="lg:w-[45%] w-full mr-auto  p-6   text-right  animate-slideUp relative">
            <div className="flex  justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-center lg:text-start w-full">
                    هل لديك كود خصم؟
                </h2>
            </div>

            <div className="flex justify-between">
                <input
                    type="text"
                    placeholder="كود الخصم"
                    className="w-full lg:ml-5 p-2 border border-gray-200 border-l-0  outline-none text-right"
                />
                <button className="bg-black text-white px-4 py-2 lg:px-12  text-lg ">
                    تطبيق
                </button>
            </div>

            <h3 className="font-semibold mt-7 text-xl  text-center lg:text-start">
                ملخص الطلبية
            </h3>

            <div className="flex  justify-between py-3 border-b border-b-gray-500">
                <span>المبلغ</span>
                <span>{cart.totalAmount} ج.م</span>
            </div>

            <div className="flex  justify-between font-bold text-lg my-4">
                <span>المبلغ الإجمالي للطلبية</span>
                <span>{cart.totalAmount} ج.م</span>
            </div>

            <div className="flex justify-between">
                <p className="text-sm text-gray-500 mb-4 m">قبل التوصيل</p>
                <p className="text-sm text-gray-500 mb-4 m">
                    تتضمن ضريبة القيمة المضافة
                </p>
            </div>

            <button
                className="w-full bg-black text-white py-3  mb-4"
                onClick={saveOrder}
            >
                إتمام الشراء بأمان
            </button>

            <div className="flex flex-col justify-center items-center mb-6">
                <span className="text-sm ml-2">دفع سريع وآمن مع</span>
                <div className="flex items-center justify-center gap-2">
                    <img
                        src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg"
                        alt="Mastercard"
                        className="h-12 mx-1"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
                        alt="Visa"
                        className="h-8 mx-1"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex  items-center">
                    <Truck
                        className="flex-shrink-0  ml-2"
                        size={40}
                        strokeWidth={1}
                    />
                    <p className="text-sm">
                        التوصيل العادي - التوصيل المجاني للطلبات الأكثر من ١٩٩٩
                        ج.م. توصيل الطلبيات يستغرق من ١ إلى ٥ يوم.
                    </p>
                </div>
                <div className="flex  items-center  border-y border-gray-300 py-3">
                    <Clock
                        className="flex-shrink-0  ml-2"
                        size={40}
                        strokeWidth={1}
                    />
                    <p className="text-sm">
                        التوصيل في نفس اليوم - اطلب قبل الساعة ١٢ ظهراً واستلم
                        في نفس اليوم. تكلفة التوصيل ١٥٠ ج.م.
                    </p>
                </div>
                <div className="flex  items-center ">
                    <Package
                        className="flex-shrink-0  ml-2"
                        size={40}
                        strokeWidth={1}
                    />
                    <p className="text-sm">
                        خدمة اختر واستلم - اطلب الآن واستلم خلال ٣-٥ أيام.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSummary
