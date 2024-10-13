import React from 'react'

const CartNav = () => {
    return (
        <div className="flex items-center justify-between  xl:mx-96 mx-4  relative mb-16 mt-10">
            <span className="h-[1px] w-full bg-black absolute top-1/2"></span>
            <div className="flex flex-col items-center justify-center relative">
                <span className="bg-black text-white  border-black flex items-center justify-center lg:size-9 size-7  xl:text-2xl text-sm  rounded-full">
                    1
                </span>
                <span className="font-bold lg:text-sm text-xs absolute top-12 whitespace-nowrap">
                    حقيبة التسوق
                </span>
            </div>
            <div className="flex flex-col items-center justify-center relative">
                <span className="bg-white text-black border border-black flex items-center justify-center lg:size-9 size-7  xl:text-2xl text-sm  rounded-full">
                    2
                </span>
                <span className=" lg:text-sm text-xs absolute top-12 whitespace-nowrap font-light">
                    تسجيل الدخول
                </span>
            </div>
            <div className="flex flex-col items-center justify-center relative">
                <span className="bg-white text-black border border-black flex items-center justify-center lg:size-9 size-7  xl:text-2xl text-sm  rounded-full">
                    3
                </span>
                <span className=" lg:text-sm text-xs absolute top-12 whitespace-nowrap font-light">
                    الدفع والتوصيل{' '}
                </span>
            </div>
            <div className="flex flex-col items-center justify-center relative">
                <span className="bg-white text-black border border-black flex items-center justify-center lg:size-9 size-7  xl:text-2xl text-sm  rounded-full">
                    4
                </span>
                <span className=" lg:text-sm text-xs absolute top-12 whitespace-nowrap font-light">
                    التأكيد{' '}
                </span>
            </div>
        </div>
    )
}

export default CartNav
