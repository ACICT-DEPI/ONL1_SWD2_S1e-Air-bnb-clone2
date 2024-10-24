// // Product.tsx
// import { Heart } from 'lucide-react';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useWishList } from '../routes/WishListContext'; // استيراد السياق

// const Product = ({
//   img,
//   name,
//   price,
//   id,
// }: {
//   img: string;
//   name: string;
//   price: number;
//   id: string;
// }) => {
//   const { toggleWishList, isInWishList } = useWishList(); // استخدام الدوال من السياق
//   const [liked, setLiked] = useState(isInWishList(id)); // التحقق من حالة المنتج في قائمة الأمنيات

//   const handleHeartClick = (e: React.MouseEvent) => {
//     e.preventDefault(); // منع التنقل عند الضغط على القلب
//     toggleWishList(id); // تبديل حالة المنتج في قائمة الأمنيات
//     setLiked(!liked); // تحديث الحالة المحلية
//   };

//   return (
//     <div className="sm:w-[280px] w-1/2 sm:h-[450px] mb-[55px] px-2">
//       <div className="flex flex-col h-full">
//         <Link
//           to={`/product/${id}`}
//           className="relative hover:scale-105 duration-200"
//         >
//           <img
//             src={img}
//             alt={name}
//             className="w-full sm:h-[395px] object-cover"
//           />
//           <Heart
//             onClick={handleHeartClick}
//             strokeWidth={1}
//             className={`absolute top-1 left-1 size-[25px] sm:size-[35px] cursor-pointer ${
//               liked ? 'fill-current text-red-500' : ''
//             } hover:fill-current hover:text-red-500`}
//           />
//         </Link>
//         <div className="flex flex-col text-sm mt-4 sm:mt-auto">
//           <p className="whitespace-nowrap overflow-hidden">{name}</p>
//           <p>{`${price.toFixed(2)} ج.م`}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
