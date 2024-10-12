// ProductsList.jsx
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Filters from "./FiltersComponent";
import SideLists from "./SideListsComponent"; 
import ProductCard from "../routes/ProductCards"; // تأكد من المسار الصحيح

const ProductsList = () => {
  const products = [
    {
      id: 1,
      name: "حلقان بتصميم ملفت",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:034582ca-011b-4165-8b7b-a9d786f56148/as/EID-df93f8142c1f82ac20f12da1562a1eede7f3deac.jpg?width=450&height=675&preferwebp=true",
      price: 599,
      category: "نساء",
      color: "فضي",
      size: "S",
    },
    {
      id: 2,
      name: "بلوزة بقصة فضفاضة ",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:66e8a0f3-d5ee-4e6f-aa1f-9651eeae83f2/as/EID-6f1cc0c5bd8e9e3b95c365fd9252ffd254dbfbbe.jpg?width=450&height=675&preferwebp=true",
      price: 1699,
      category: "نساء",
      color: "لبني",
      size: "S",
    },
    {
      id: 3,
      name: "فستان بظهر مفتوح  ",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:92241bfc-05ce-4e2b-964f-23daa98e8caa/as/EID-4190fc9caebbeedfe4ac7ebe68efdf87ebacbc98.jpg?width=450&height=675&preferwebp=true",
      price: 2199,
      category: "نساء",
      color: "أسود",
      size: "L",
    },
    {
      id: 4,
      name: "كارديغان محبوك بتصميم ناعم ",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:18a6f94c-a187-4ada-b40e-4aea1c44f53f/as/EID-02e017144218c92f057a552fcf6c04109b8743c3.jpg?width=450&height=675&preferwebp=true",
      price: 899,
      category: "رجال",
      color: "أسود",
      size: "32",
    },
    {
      id: 5,
      name: "كنزة قصيرة بقبة بولو  ",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:39cc542e-9d6b-4196-9dad-939f01f65a65/as/EID-db67cfba6b24426dcc02aab0609d291ff6d1deb1.jpg?width=450&height=675&preferwebp=true",
      price: 449,
      category: "نساء",
      color: "كحلي",
      size: "M",
    },
    {
      id: 6,
      name: "بليزر بصَف أزرار واحد",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:8aad773b-72eb-4f4b-a9a3-506b5f0d22b1/as/EID-b9948e6f6fbf9abc906b402de2b85b703ea0fd86.jpg?width=450&height=675&preferwebp=true",
      price: 5000,
      category: "نساء",
      color: "بيج",
      size: "S",
    },
    {
      id: 7,
      name: "بلوزة قبة بولو ",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:00be4338-5a64-48e2-aef1-8e5ca88eacf0/as/EID-159ebe8bf5e087be05dab5eaff20e7fb9a2b0968.jpg?width=450&height=675&preferwebp=true",
      price: 799,
      category: "نساء",
      color: "رمادي",
      size: "L",
    },
    {
      id: 8,
      name: "بنطلون بتصميم واسع حزام",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:28f920a9-a577-4a43-aaed-2c19d5621aff/as/EID-d72f0037a7f72c560609ab81e693fe976f150e5d.jpg?width=450&height=675&preferwebp=true",
      price: 2799,
      category: "نساء",
      color: "زيتي",
      size: "M",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedFilters, setSelectedFilters] = useState({
    price: null,
    color: null,
    size: null,
    category: null,
  });

  const applyFilters = () => {
    setFilteredProducts(
      products.filter((product) => {
        return (
          (!selectedFilters.price || product.price === selectedFilters.price) &&
          (!selectedFilters.color || product.color === selectedFilters.color) &&
          (!selectedFilters.size || product.size === selectedFilters.size) &&
          (!selectedFilters.category || product.category === selectedFilters.category)
        );
      })
    );
  };

  const updateFilter = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  const selectedFiltersArray = Object.entries(selectedFilters)
    .filter(([, value]) => value)
    .map(([Filter, value]) => ({ Filter, value }));

  return (
    <div className="flex flex-col px-6">
      <div className="text-center text-sm flex justify-center my-3">
        <Link to="/" className="px-1"> الصفحة الرئيسية </Link> / 
        <Link to="/kids" className="px-1">النساء </Link> / 
        <Link to="/kids/view-all" className="px-1"> عرض الكل </Link>
      </div>
      <div className="flex justify-between mt-5">
        <SideLists />
        <main className="flex flex-col flex-1">
          <h3 className="sm:text-5xl text-3xl text-center sm:text-start mb-8">
            النساء
          </h3>
          <Filters products={filteredProducts} updateFilter={updateFilter} />
          {selectedFiltersArray.length > 0 && (
            <div className="flex gap-2 items-center flex-col sm:flex-row border sm:border-none p-2 lg:h-[50px]">
              <div className="font-bold whitespace-nowrap text-center sm:text-start py-3">
                الاختيارات المحددة
              </div>
              <div className="flex gap-3 flex-wrap justify-center">
                {selectedFiltersArray.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() => updateFilter(filter.Filter, null)}
                    className="flex gap-2 border px-2 py-1 items-center justify-center"
                  >
                    <span className="flex items-center justify-center text-sm">
                      {filter.value}
                    </span>
                    <MdClose className="size-[18px] sm:size-[24px]" />
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductsList;
