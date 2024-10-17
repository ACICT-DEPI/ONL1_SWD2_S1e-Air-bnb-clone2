import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
    productID: string
    title: string
    image: string
    price: number
    category: string
    color: string
    size: string
    quantity: number
    amount: number
}

interface Cart {
    items: CartItem[]
    totalAmount: number
}

interface useCartT {
    cart: Cart
    updateCart: (cart: Cart) => void
    addToCart: (product: CartItem) => void
}

const useCart = create<useCartT>()(
    persist(
        (set) => ({
            cart: {
                items: [],
                totalAmount: 0,
            },
            updateCart: (cart) => set({ cart }),
            addToCart: (product) => set((state) => {
                const updatedItems = [...state.cart.items, product];
                const updatedTotalAmount = updatedItems.reduce((sum, item) => sum + item.amount, 0);
                return {
                    cart: {
                        items: updatedItems,
                        totalAmount: updatedTotalAmount
                    }
                };
            }),
        }),
        {
            name: 'cartStore',
            partialize: (state) => ({
                cart: state.cart,
            }),
        }
    )
)

export default useCart;
