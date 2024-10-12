import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false); // حالة تتبع ما إذا تم النقر على القلب أم لا

  const toggleLike = () => {
    setIsLiked(!isLiked); // عند النقر على القلب، نقوم بتغيير الحالة
  };

  const productPrice = product.price ? parseFloat(product.price).toFixed(2) : 'N/A';

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg relative transform transition duration-300 hover:-translate-y-2 hover:scale-102 w-[90%] h-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-100 object-cover" // لتغيير حجم الصوره جوا الكارد نلعب فالرقم بس
      />
      <button
        onClick={toggleLike} // اضغط لتغيير حالة القلب
        className={`absolute top-2 right-2 ${isLiked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500 fill-current`} 
      >
        <Heart size={20} fill={isLiked ? 'red' : 'none'} /> {/* تغيير لون القلب بناءً على حالة النقر */}
      </button>
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-700">
          {productPrice !== 'N/A' ? `EGP ${productPrice}` : 'Price Not Available'}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
