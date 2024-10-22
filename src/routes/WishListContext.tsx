// src/routes/WishListContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

// تعريف نوع المنتج لقائمة المفضلة
export interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
}

// تعريف نوع السياق
interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void; // New function to remove items
}

// إنشاء السياق
export const WishListContext = createContext<WishlistContextType | undefined>(undefined);

// Hook للوصول إلى السياق بسهولة
export const useWishlist = () => {
  const context = useContext(WishListContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishListProvider');
  }
  return context;
};

interface WishListProviderProps {
  children: ReactNode;
}

// Provider لتوفير السياق
export const WishListProvider: React.FC<WishListProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    if (!wishlist.some((i) => i.id === item.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, item]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <WishListContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};
