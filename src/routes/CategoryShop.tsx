import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/FetchProducts';
import Discount from '../components/homePage/Discount';
import SideLists from './SideListsComponent';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // استيراد أيقونات القلب

// تعريف نوع المنتج
type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  color: string;
  size: string;
};

interface CategoryShopProps {
  category: string;
  header: string;
  text: string;
  link: string;
  linkText: string;
  coverHeader: string;
  coverImg: string;
  coverSmallImg: string;
  coverText: string;
  secondaryImg?: string;
  description: string[];
  onButtonClick?: () => void;
}

const CategoryShop: React.FC<CategoryShopProps> = ({
  category,
  header,
  text,
  link,
  linkText,
  coverHeader,
  coverImg,
  coverSmallImg,
  coverText,
  secondaryImg,
  description,
  onButtonClick,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [wishList, setWishList] = useState<string[]>([]); // حالة قائمة التمنيات

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getProducts({ category });
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // دالة لإضافة أو إزالة المنتجات من قائمة التمنيات
  const toggleWishList = (id: string) => {
    setWishList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="overflow-hidden mx-auto flex flex-col xl:flex-row gap-4 px-5 xl:px-0 animate-slideUp relative">
      <aside className="hidden xl:block w-1/4 mr-4">
        <SideLists />
      </aside>

      <main className="xl:w-3/4 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center my-4">{category}</h1>
        <Discount />

        <div className="relative w-full">
          <img src={coverImg} alt={coverHeader} className="w-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
            <h2 className="text-white text-3xl">{coverHeader}</h2>
            <p className="text-white text-lg">{coverText}</p>
            <button onClick={onButtonClick} className="bg-white text-black px-4 py-2 mt-4">
              {linkText}
            </button>
          </div>
        </div>

        {secondaryImg && (
          <div className="relative w-full">
            <img src={secondaryImg} alt={`${category} Secondary Image`} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
              <h3 className="text-white text-3xl">{header}</h3>
              <p className="text-white text-lg">{text}</p>
              <button onClick={onButtonClick} className="bg-white text-black px-4 py-2 mt-4">
                {linkText}
              </button>
            </div>
          </div>
        )}

        <div className="mt-4">
          {description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}

          

          {loading ? (
            <p>...جاري تحميل المنتجات</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="p-4 border rounded shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <button onClick={() => toggleWishList(product.id)}>
                      {wishList.includes(product.id) ? (
                        <FaHeart color="red" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-700">{product.category}</p>
                  <p className="text-green-600 font-bold">{product.price} EGP</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoryShop;
