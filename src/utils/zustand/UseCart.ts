import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Cart {
    items: {
        productID: string
        title: string
        image: string
        price: number
        category: string
        color: string
        size: string
        quantity: number
        amount: number
    }[]
    totalAmount: number
}

interface useCartT {
    cart: Cart
    updateCart: (cart: Cart) => void
}

const useCart = create<useCartT>()(
    persist(
        (set, get) => ({
            cart: {
                items: [],
                totalAmount: 0,
            },
            updateCart: (cart) => set({ cart }),
        }),
        {
            name: 'cartStore',
            partialize: (state) => ({
                cart: state.cart,
            }),
        }
    )
)

export default useCart
