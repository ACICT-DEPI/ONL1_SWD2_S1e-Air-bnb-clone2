import { ChevronDown, CircleAlert, Package, Trash, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { GiCargoCrane } from 'react-icons/gi'
import useCart from '../../utils/zustand/UseCart'

const CartBody = () => {
    const { cart, updateCart } = useCart()

    const deleteItem = (id) => {
        const updatedItems = cart.items.filter((item) => item.productID !== id)
        updateCart({
            items: updatedItems,
            totalAmount: updatedItems.reduce(
                (acc, item) => acc + item.amount,
                0
            ),
        })
    }
    const editQuantity = (id, quantity) => {
        const ItemIndex = cart.items.findIndex((item) => item.productID === id)
        if (ItemIndex !== -1) {
            console.log(cart.items[ItemIndex])
            const item = {
                ...cart.items[ItemIndex],
                quantity,
                amount: cart.items[ItemIndex].price * quantity,
            }

            const updatedItems = cart.items
            updatedItems[ItemIndex] = item
            console.log(updatedItems[ItemIndex])

            updateCart({
                items: updatedItems,
                totalAmount: updatedItems.reduce(
                    (acc, item) => acc + item.amount,
                    0
                ),
            })
        }
    }

    return (
        <div className="lg:w-[50%] w-full flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center  font-bold py-5 animate-slideUp relative">
                <div className="hidden lg:block">
                    حقيبة التسوق (
                    <span className="text-xl px-2">
                        {cart.items.reduce(
                            (acc, item) => acc + item.quantity,
                            0
                        )}
                    </span>
                    قطعة )
                </div>

                <div className="">التوصيل إلى: مدينة سوهاج</div>
            </div>
            <div className="relative   bg-[#efe4ce] py-5 flex items-center justify-center lg:justify-start">
                <div className="flex items-center justify-center px-2">
                    <Package size={30} />
                </div>
                <div className="text-center">
                    <span className="lg:text-lg text-sm font-bold pl-1">
                        خدمة الإرجاع مجاناً
                    </span>
                    متوفرة أونلاين وفي المحلات
                </div>
            </div>

            <div className="flex flex-col animate-slideUp relative my-5 mb-10">
                {cart.items.map((item) => (
                    <CartItem
                        key={item.productID}
                        item={item}
                        index={cart.items.indexOf(item)}
                        deleteItem={deleteItem}
                        editQuantity={editQuantity}
                    />
                ))}
            </div>
        </div>
    )
}

export default CartBody

const CartItem = ({
    item,
    index,
    deleteItem,
    editQuantity,
}: {
    item: {
        productID: string
        title: string
        image: string
        price: number
        category: string
        color: string
        size: string
        quantity: number
    }
    index: number
    deleteItem: (id: string) => void
    editQuantity: (id: string, quantity: number) => void
}) => {
    const [showQuantity, setshowQuantity] = useState(false)
    const [quantity, setQuantity] = useState(item.quantity)
    useEffect(() => {
        editQuantity(item.productID, quantity)
    }, [quantity])

    return (
        <div className="flex justify-between lg:p-[20px] p-2 py-4 lg:py-2 bg-white mb-5 ">
            <div className="flex ">
                <div className="flex">
                    <div className="w-[90px] h-[145px]">
                        <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="px-3 ">
                        <div className="flex flex-col text-sm">
                            <div className=" flex flex-col gap-1 lg:text-lg font-bold">
                                <div>{item.title}</div>
                                <div>{item.price} ج.م</div>
                            </div>
                            <div className="flex  flex-col text-[#878787] py-4 gap-1 text-xs">
                                <div className="whitespace-pre-wrap hidden lg:block">
                                    رقم القطعة : {item.productID}
                                </div>
                                <div className="whitespace-pre-wrap">
                                    Color label: {item.color}
                                </div>
                                <div className="whitespace-pre-wrap">
                                    المقاس: {item.size}
                                </div>
                            </div>
                            <div className="underline">
                                أضف إلى المنتجات المفضلة
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <button
                    className="mr-auto mb-12"
                    onClick={() => deleteItem(item.productID)}
                >
                    <Trash2 className="text-gray-300 size-7 hover:text-gray-950 duration-150 " />
                </button>
                <div className="flex flex-col gap-4">
                    <div className="border border-gray-900 lg:w-[90px] w-full  px-2  lg:py-2 flex items-center relative justify-between">
                        <span className="lg:px-4 text-xl"> {quantity}</span>
                        <button
                            className=";g:px-2 text-gray-400"
                            onClick={() => {
                                setshowQuantity(!showQuantity)
                            }}
                        >
                            <ChevronDown />
                        </button>
                        <ul
                            className={`absolute top-full  ${
                                showQuantity ? 'block' : 'hidden'
                            } bg-white border border-gray-900 lg:w-[90px] w-full -right-[1px]`}
                        >
                            <li className=" py-2 border-b border-b-gray-300">
                                <button
                                    onClick={() => {
                                        setshowQuantity(!showQuantity)
                                        setQuantity(1)
                                    }}
                                    className="flex items-center justify-center w-full"
                                >
                                    1
                                </button>
                            </li>
                            <li className=" py-2 border-b border-b-gray-300">
                                <button
                                    onClick={() => {
                                        setshowQuantity(!showQuantity)
                                        setQuantity(2)
                                    }}
                                    className="flex items-center justify-center w-full"
                                >
                                    2
                                </button>
                            </li>
                            <li className=" py-2 border-b border-b-gray-300">
                                <button
                                    onClick={() => {
                                        setshowQuantity(!showQuantity)
                                        setQuantity(3)
                                    }}
                                    className="flex items-center justify-center w-full"
                                >
                                    3
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center border border-gray-300 p-1 text-gray-600 text-xs">
                        <span>العادي</span>
                        <CircleAlert size={12} />
                    </div>
                </div>
            </div>
        </div>
    )
}
