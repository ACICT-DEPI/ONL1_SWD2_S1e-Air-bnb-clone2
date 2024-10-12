// import { ArrowBigDown, Heart } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
// import { Link } from "react-router-dom";
// import FilterBy from "../components/ProductsListPage/FilterBy";
// import SortBy from "../components/ProductsListPage/SortBy";
// import Product from "../components/ProductsListPage/ProductCard";

// const ProductsList = ({name}) => {
//     const products = [
//         {
//             id: "",
//             name: "كنزة صوفية للرجال - أزرق",
//             image: "https://eg.hm.com/assets/styles/HNM/19690553/d835a589fd0023048b12c4441449f3b9efc69eb9/1/image-thumb__8481573__product_listing/d835a589fd0023048b12c4441449f3b9efc69eb9.jpg",
//             price: 749,
//             category: "رجال",
//             color: "أزرق",
//             size: "M", // Added size
//         },
//         {
//             id: "",
//             name: "فستان صيفي للنساء - زهري",
//             image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:bfbcde70-9188-4ca3-9d93-ff3a5b27cf6b/as/EID-17ddaaf62c74fa370cdb0173327dfd34b61299fd.jpg?width=450&height=675&preferwebp=true",
//             price: 599,
//             category: "نساء",
//             color: "زهري",
//             size: "S", // Added size
//         },
//         {
//             id: "",
//             name: "تي شيرت للأطفال - أصفر",
//             image: "https://eg.hm.com/assets/styles/HNM/19490805/bd03c489da7adc0123d1d04afa24fabc056842d0/2/image-thumb__8389841__product_listing/16cb1ca0c1077b298cd30851a681705f11ef6b7c.jpg",
//             price: 299,
//             category: "أطفال",
//             color: "أصفر",
//             size: "L", // Added size
//         },
//         {
//             id: "",
//             name: "سروال جينز للرجال - أسود",
//             image: "https://eg.hm.com/assets/styles/HNM/19879845/b9c5e33d8eca392e70d9a6cd620d8111a4662961/1/image-thumb__8541777__product_listing/b9c5e33d8eca392e70d9a6cd620d8111a4662961.jpg",
//             price: 899,
//             category: "رجال",
//             color: "أسود",
//             size: "32", // Added size
//         },
//         {
//             id: "",
//             name: "سروال قصير للنساء - كحلي",
//             image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:9904bdc7-9fa6-4a0c-bbb9-c8942d110628/as/EID-a50e2fa8ea43e17e5458ddddf78f8e84bfc317c9.jpg?width=450&height=675&preferwebp=true",
//             price: 449,
//             category: "نساء",
//             color: "كحلي",
//             size: "M", // Added size
//         },
//         {
//             id: "",
//             name: "جاكيت للأطفال - أخضر",
//             image: "https://eg.hm.com/assets/styles/HNM/19686860/9f8b7e2d0a22c7695a2fb3969ab91db1b4a6628b/2/image-thumb__8474282__product_listing/77be343820fa13944986d1b0063743afb929d849.jpg",
//             price: 399,
//             category: "أطفال",
//             color: "أخضر",
//             size: "S", // Added size
//         },
//         {
//             id: "",
//             name: "بلوزة شتوية للنساء - رمادي",
//             image: "https://eg.hm.com/assets/styles/HNM/20227275/6bdbc8752dfca6971bf80178d84f0ec35f78b973/1/image-thumb__9392909__product_listing/6bdbc8752dfca6971bf80178d84f0ec35f78b973.jpg",
//             price: 749,
//             category: "نساء",
//             color: "رمادي",
//             size: "L", // Added size
//         },
//         {
//             id: "",
//             name: "فستان طويل للنساء - أزرق",
//             image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:a6631108-16ce-4d2a-ab27-e25e02415d20/as/EID-8ea176fb5fe40c4fe6573aaf88f92568ecf9be7c.jpg?width=450&height=675&preferwebp=true",
//             price: 799,
//             category: "نساء",
//             color: "أزرق",
//             size: "M", // Added size
//         },
//         {
//             id: "",
//             name: "سروال جينز للأطفال - أزرق",
//             image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:09033efb-2177-4980-a445-59a559095c07/as/EID-b6bb1590cd5db58bdd0c942a099511e7965cc5f6.jpg?width=450&height=675&preferwebp=true",
//             price: 350,
//             category: "أطفال",
//             color: "أزرق",
//             size: "L", // Added size
//         },
//         {
//             id: "",
//             name: "تي شيرت للرجال - أبيض",
//             image: "https://eg.hm.com/assets/styles/HNM/19991089/90dbb8babb95797c4348665b229150f9a070c20a/2/image-thumb__8586191__product_listing/aded4d6a80321b9de3d0f3a3c9e4d01123c8943e.jpg",
//             price: 399,
//             category: "رجال",
//             color: "أبيض",
//             size: "M", // Added size
//         },
//         {
//             id: "",
//             name: "فستان سهرة للنساء - ذهبي",
//             image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:2751c94a-0d5b-4cf3-b8fc-c28051dd81f8/as/EID-ad4bb26a823437ce6ba082d43a2fa2e421cbc7ce.jpg?width=450&height=675&preferwebp=true",
//             price: 999,
//             category: "نساء",
//             color: "ذهبي",
//             size: "L", // Added size
//         },
//     ];

//     const [filteredProducts, setFilteredProducts] = useState(products);
//     const [selectedFilters, setSelectedFilters] = useState({
//         price: null,
//         color: null,
//         size: null,
//         category: null,
//         name:name ,
//     });

//     const applyFilters = () => {
//         setFilteredProducts(
//             products.filter((product) => {
//                 return (
//                     (!selectedFilters.price ||
//                         product.price === selectedFilters.price) &&
//                     (!selectedFilters.color ||
//                         product.color === selectedFilters.color) &&
//                     (!selectedFilters.size ||
//                         product.size === selectedFilters.size) &&
//                     (!selectedFilters.category ||
//                         product.category === selectedFilters.category) &&
//                         (!selectedFilters.name || selectedFilters.name.trim() === "" || 
//                         product.name.toLowerCase().includes(selectedFilters.name.toLowerCase()))
//                 );
//             })
//         );
//     };

//     const updateFilter = (filterType, value) => {
//         setSelectedFilters((prev) => ({
//             ...prev,
//             [filterType]: value,
//         }));
//     };
//     useEffect(() => {
//         // Update selectedFilters when name changes
//         setSelectedFilters((prev) => ({
//             ...prev,
//             name: name,
//         }));
//     }, [name]); // Watch for changes in name

//     useEffect(() => {
//         applyFilters();
//     }, [selectedFilters]);
//     const LinkLi = ({ href, text }: { href: string; text: string }) => {
//         return (
//             <Link
//                 to={href}
//                 className="text-sm border-b-2 border-transparent hover:border-red-600  hover:text-red-600 w-fit duration-75"
//             >
//                 {text}
//             </Link>
//         );
//     };
//     const sideLists = [
//         {
//             name: "البنات 2-8 سنوات",
//             links: [
//                 { name: "اظهار الكل", link: "./kids/view-all" },
//                 { name: "وصل حديثاً", link: "./kids/view-all" },
//                 {
//                     name: "الملابس",
//                     link: "./kids/view-all",
//                 },
//                 { name: "الأحذية", link: "./kids/view-all" },
//                 { name: "الإكسسوارات", link: "./kids/view-all" },
//                 { name: "ملابس الخروج", link: "./kids/view-all" },
//                 { name: "الملابس الرياضية", link: "./kids/view-all" },
//             ],
//         },
//         {
//             name: "الأولاد 2-8 سنوات",
//             links: [
//                 { name: "اظهار الكل", link: "./kids/view-all" },
//                 { name: "وصل حديثاً", link: "./kids/view-all" },
//                 {
//                     name: "الملابس",
//                     link: "./kids/view-all",
//                 },
//                 { name: "الأحذية", link: "./kids/view-all" },
//                 { name: "الإكسسوارات", link: "./kids/view-all" },
//                 { name: "ملابس الخروج", link: "./kids/view-all" },
//                 { name: "الملابس الرياضية", link: "./kids/view-all" },
//             ],
//         },
//         {
//             name: "البنات 9-14 سنوات",
//             links: [
//                 { name: "اظهار الكل", link: "./kids/view-all" },
//                 { name: "وصل حديثاً", link: "./kids/view-all" },
//                 {
//                     name: "الملابس",
//                     link: "./kids/view-all",
//                 },
//                 { name: "الأحذية", link: "./kids/view-all" },
//                 { name: "الإكسسوارات", link: "./kids/view-all" },
//                 { name: "ملابس الخروج", link: "./kids/view-all" },
//                 { name: "الملابس الرياضية", link: "./kids/view-all" },
//             ],
//         },
//         {
//             name: "الاولاد 9-14 سنوات",
//             links: [
//                 { name: "اظهار الكل", link: "./kids/view-all" },
//                 { name: "وصل حديثاً", link: "./kids/view-all" },
//                 {
//                     name: "الملابس",
//                     link: "./kids/view-all",
//                 },
//                 { name: "الأحذية", link: "./kids/view-all" },
//                 { name: "الإكسسوارات", link: "./kids/view-all" },
//                 { name: "ملابس الخروج", link: "./kids/view-all" },
//                 { name: "الملابس الرياضية", link: "./kids/view-all" },
//             ],
//         },
//         {
//             name: "تسوق حسب المنتج",
//             links: [
//                 { name: "اظهار الكل", link: "./kids/view-all" },
//                 { name: "وصل حديثاً", link: "./kids/view-all" },
//                 {
//                     name: "الملابس",
//                     link: "./kids/view-all",
//                 },
//                 { name: "الأحذية", link: "./kids/view-all" },
//                 { name: "الإكسسوارات", link: "./kids/view-all" },
//                 { name: "ملابس الخروج", link: "./kids/view-all" },
//                 { name: "الملابس الرياضية", link: "./kids/view-all" },
//             ],
//         },
//     ];

//     const selectedFiltersArray = Object.entries(selectedFilters)
//         .filter(([, value]) => value)
//         .map(([Filter, value]) => ({ Filter, value }));

//     return (
//         <div className="flex flex-col px-6">
//             <div className="text-center text-sm flex justify-center my-3">
//                 <Link to="/" className="px-1">
//                     الصفحة الرئيسية
//                 </Link>{" "}
//                 /
//                 <Link to="/kids" className="px-1">
//                     الاطفال
//                 </Link>{" "}
//                 /
//                 <Link to="/kids/view-all" className="px-1">
//                     عرض الكل
//                 </Link>
//             </div>
//             <div className="flex justify-between mt-5">
//                 <aside className="w-[235px] hidden xl:flex flex-col gap-4">
//                     {sideLists.map((list, index) => (
//                         <div className="flex flex-col gap-4 " key={index}>
//                             <h3 className="font-bold">{list.name}</h3>
//                             <ul className="flex flex-col gap-2">
//                                 {list.links.map((link, index) => (
//                                     <LinkLi
//                                         href="#"
//                                         text={link.name}
//                                         key={index}
//                                     />
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </aside>
//                 <main className="flex flex-col flex-1">
//                     <h1 className="sm:text-5xl text-3xl text-center sm:text-start mb-8">
//                         الأولاد 9-14 سنوات
//                     </h1>
//                     <Filters
//                         products={filteredProducts}
//                         updateFilter={updateFilter}
//                     />
//                     {selectedFiltersArray.length > 0 && (
//                         <div className="flex gap-2 items-center flex-col sm:flex-row border sm:border-none p-2 lg:h-[50px]">
//                             <div className=" font-bold whitespace-nowrap text-center sm:text-start py-3">
//                                 الاختيارات المحددة
//                             </div>
//                             <div className="flex gap-3 flex-wrap justify-center  ">
//                                 {selectedFiltersArray.map((filter, index) => {
//                                     if (!filter.value) return null;
//                                     return (
//                                         <button
//                                             key={index}
//                                             onClick={() =>
//                                                 updateFilter(
//                                                     filter.Filter,
//                                                     null
//                                                 )
//                                             }
//                                             className="flex gap-2 border px-2 py-1 items-center justify-center"
//                                         >
//                                             <span className="flex items-center justify-center text-sm">
//                                                 {filter.value}
//                                             </span>
//                                             <MdClose className="size-[18px] sm:size-[24px]" />
//                                         </button>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     )}
//                     <div className=" flex-wrap flex justify-between md:justify-start mt-5">
//                         {filteredProducts.map((product, index) => (
//                             <Product
//                                 img={product.image}
//                                 name={product.name}
//                                 price={product.price}
//                                 key={index}
//                             />
//                         ))}
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default ProductsList;

// const Filters = ({
//     products,
//     updateFilter,
// }: {
//     products: {
//         id: string;
//         name: string;
//         image: string;
//         price: number;
//         category: string;
//         color: string;
//         size: string;
//     }[];
//     updateFilter: (filterType: string, value: any) => void;
// }) => {
//     const colorCounts = products.reduce((acc, product) => {
//         acc[product.color] = (acc[product.color] || 0) + 1;
//         return acc;
//     }, {});

//     const priceCounts = products.reduce((acc, product) => {
//         acc[product.price] = (acc[product.price] || 0) + 1;
//         return acc;
//     }, {});

//     const sizeCounts = products.reduce((acc, product) => {
//         acc[product.size] = (acc[product.size] || 0) + 1;
//         return acc;
//     }, {});
//     const categoryCounts = products.reduce((acc, product) => {
//         acc[product.category] = (acc[product.category] || 0) + 1;
//         return acc;
//     }, {});

//     const colorCountArray = Object.entries(colorCounts).map(
//         ([name, count]) => ({ name, count: Number(count) })
//     );
//     const priceCountArray = Object.entries(priceCounts).map(
//         ([price, count]) => ({ name: Number(price), count: Number(count) })
//     );
//     const sizeCountArray = Object.entries(sizeCounts).map(([name, count]) => ({
//         name,
//         count: Number(count),
//     }));
//     const categoryCountArray = Object.entries(categoryCounts).map(
//         ([category, count]) => ({ name: category, count: Number(count) })
//     );
//     return (
//         <div className="flex flex-wrap gap-2 my-2 justify-evenly sm:justify-start">
//             <SortBy />
//             <FilterBy
//                 FilterName="السعر"
//                 filter="price"
//                 filters={priceCountArray}
//                 updateFilter={updateFilter}
//             />
//             <FilterBy
//                 FilterName="المقاس"
//                 filter="size"
//                 filters={sizeCountArray}
//                 updateFilter={updateFilter}
//             />
//             <FilterBy
//                 FilterName="اللون"
//                 filter="color"
//                 filters={colorCountArray}
//                 updateFilter={updateFilter}
//             />
//             <FilterBy
//                 FilterName="التصنيف"
//                 filter="category"
//                 filters={categoryCountArray}
//                 updateFilter={updateFilter}
//             />
//         </div>
//     );
// };


import { ArrowBigDown, Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import FilterBy from "../components/ProductsListPage/FilterBy";
import SortBy from "../components/ProductsListPage/SortBy";
import Product from "../components/ProductsListPage/ProductCard";

const ProductsList = ({name}) => {
    const products = [
              {
            id: "",
            name: "كنزة صوفية للرجال - أزرق",
            image: "https://eg.hm.com/assets/styles/HNM/19690553/d835a589fd0023048b12c4441449f3b9efc69eb9/1/image-thumb__8481573__product_listing/d835a589fd0023048b12c4441449f3b9efc69eb9.jpg",
            price: 749,
            category: "رجال",
            color: "أزرق",
            size: "M", // Added size
        },
        {
            id: "",
            name: "فستان صيفي للنساء - زهري",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:bfbcde70-9188-4ca3-9d93-ff3a5b27cf6b/as/EID-17ddaaf62c74fa370cdb0173327dfd34b61299fd.jpg?width=450&height=675&preferwebp=true",
            price: 599,
            category: "نساء",
            color: "زهري",
            size: "S", // Added size
        },
        {
            id: "",
            name: "تي شيرت للأطفال - أصفر",
            image: "https://eg.hm.com/assets/styles/HNM/19490805/bd03c489da7adc0123d1d04afa24fabc056842d0/2/image-thumb__8389841__product_listing/16cb1ca0c1077b298cd30851a681705f11ef6b7c.jpg",
            price: 299,
            category: "أطفال",
            color: "أصفر",
            size: "L", // Added size
        },
        {
            id: "",
            name: "سروال جينز للرجال - أسود",
            image: "https://eg.hm.com/assets/styles/HNM/19879845/b9c5e33d8eca392e70d9a6cd620d8111a4662961/1/image-thumb__8541777__product_listing/b9c5e33d8eca392e70d9a6cd620d8111a4662961.jpg",
            price: 899,
            category: "رجال",
            color: "أسود",
            size: "32", // Added size
        },
        {
            id: "",
            name: "سروال قصير للنساء - كحلي",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:9904bdc7-9fa6-4a0c-bbb9-c8942d110628/as/EID-a50e2fa8ea43e17e5458ddddf78f8e84bfc317c9.jpg?width=450&height=675&preferwebp=true",
            price: 449,
            category: "نساء",
            color: "كحلي",
            size: "M", // Added size
        },
        {
            id: "",
            name: "جاكيت للأطفال - أخضر",
            image: "https://eg.hm.com/assets/styles/HNM/19686860/9f8b7e2d0a22c7695a2fb3969ab91db1b4a6628b/2/image-thumb__8474282__product_listing/77be343820fa13944986d1b0063743afb929d849.jpg",
            price: 399,
            category: "أطفال",
            color: "أخضر",
            size: "S", // Added size
        },
        {
            id: "",
            name: "بلوزة شتوية للنساء - رمادي",
            image: "https://eg.hm.com/assets/styles/HNM/20227275/6bdbc8752dfca6971bf80178d84f0ec35f78b973/1/image-thumb__9392909__product_listing/6bdbc8752dfca6971bf80178d84f0ec35f78b973.jpg",
            price: 749,
            category: "نساء",
            color: "رمادي",
            size: "L", // Added size
        },
        {
            id: "",
            name: "فستان طويل للنساء - أزرق",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:a6631108-16ce-4d2a-ab27-e25e02415d20/as/EID-8ea176fb5fe40c4fe6573aaf88f92568ecf9be7c.jpg?width=450&height=675&preferwebp=true",
            price: 799,
            category: "نساء",
            color: "أزرق",
            size: "M", // Added size
        },
        {
            id: "",
            name: "سروال جينز للأطفال - أزرق",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:09033efb-2177-4980-a445-59a559095c07/as/EID-b6bb1590cd5db58bdd0c942a099511e7965cc5f6.jpg?width=450&height=675&preferwebp=true",
            price: 350,
            category: "أطفال",
            color: "أزرق",
            size: "L", // Added size
        },
        {
            id: "",
            name: "تي شيرت للرجال - أبيض",
            image: "https://eg.hm.com/assets/styles/HNM/19991089/90dbb8babb95797c4348665b229150f9a070c20a/2/image-thumb__8586191__product_listing/aded4d6a80321b9de3d0f3a3c9e4d01123c8943e.jpg",
            price: 399,
            category: "رجال",
            color: "أبيض",
            size: "M", // Added size
        },
        {
            id: "",
            name: "فستان سهرة للنساء - ذهبي",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:2751c94a-0d5b-4cf3-b8fc-c28051dd81f8/as/EID-ad4bb26a823437ce6ba082d43a2fa2e421cbc7ce.jpg?width=450&height=675&preferwebp=true",
            price: 999,
            category: "نساء",
            color: "ذهبي",
            size: "L", // Added size
        },
    ];

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedFilters, setSelectedFilters] = useState({
        price: null,
        color: null,
        size: null,
        category: null,
        name: name,
    });

    const applyFilters = () => {
        setFilteredProducts(
            products.filter((product) => {
                return (
                    (!selectedFilters.price ||
                        product.price === selectedFilters.price) &&
                    (!selectedFilters.color ||
                        product.color === selectedFilters.color) &&
                    (!selectedFilters.size ||
                        product.size === selectedFilters.size) &&
                    (!selectedFilters.category ||
                        product.category === selectedFilters.category) &&
                        (!selectedFilters.name || 
                            (typeof selectedFilters.name === 'string' && selectedFilters.name.trim() === "") || 
                            (product.name && product.name.toLowerCase().includes(selectedFilters.name.toLowerCase())))
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
        // عندما يكون الاسم فارغًا (تم مسحه بالكامل) قم بإعادة جميع المنتجات
        if (name==="") {
            setSelectedFilters((prev) => ({
                ...prev,
                name: "",  // تعيين الاسم كقيمة فارغة
            }));
        } else {
            setSelectedFilters((prev) => ({
                ...prev,
                name: name,
            }));
        }
    }, [name]);

    useEffect(() => {
        applyFilters();
    }, [selectedFilters]);

    const LinkLi = ({ href, text }: { href: string; text: string }) => {
        return (
            <Link
                to={href}
                className="text-sm border-b-2 border-transparent hover:border-red-600 hover:text-red-600 w-fit duration-75"
            >
                {text}
            </Link>
        );
    };

    const sideLists = [
        {
            name: "البنات 2-8 سنوات",
            links: [
                { name: "اظهار الكل", link: "./kids/view-all" },
                { name: "وصل حديثاً", link: "./kids/view-all" },
                {
                    name: "الملابس",
                    link: "./kids/view-all",
                },
                { name: "الأحذية", link: "./kids/view-all" },
                { name: "الإكسسوارات", link: "./kids/view-all" },
                { name: "ملابس الخروج", link: "./kids/view-all" },
                { name: "الملابس الرياضية", link: "./kids/view-all" },
            ],
        },
        {
            name: "الأولاد 2-8 سنوات",
            links: [
                { name: "اظهار الكل", link: "./kids/view-all" },
                { name: "وصل حديثاً", link: "./kids/view-all" },
                {
                    name: "الملابس",
                    link: "./kids/view-all",
                },
                { name: "الأحذية", link: "./kids/view-all" },
                { name: "الإكسسوارات", link: "./kids/view-all" },
                { name: "ملابس الخروج", link: "./kids/view-all" },
                { name: "الملابس الرياضية", link: "./kids/view-all" },
            ],
        },
        {
            name: "البنات 9-14 سنوات",
            links: [
                { name: "اظهار الكل", link: "./kids/view-all" },
                { name: "وصل حديثاً", link: "./kids/view-all" },
                {
                    name: "الملابس",
                    link: "./kids/view-all",
                },
                { name: "الأحذية", link: "./kids/view-all" },
                { name: "الإكسسوارات", link: "./kids/view-all" },
                { name: "ملابس الخروج", link: "./kids/view-all" },
                { name: "الملابس الرياضية", link: "./kids/view-all" },
            ],
        },
        {
            name: "الاولاد 9-14 سنوات",
            links: [
                { name: "اظهار الكل", link: "./kids/view-all" },
                { name: "وصل حديثاً", link: "./kids/view-all" },
                {
                    name: "الملابس",
                    link: "./kids/view-all",
                },
                { name: "الأحذية", link: "./kids/view-all" },
                { name: "الإكسسوارات", link: "./kids/view-all" },
                { name: "ملابس الخروج", link: "./kids/view-all" },
                { name: "الملابس الرياضية", link: "./kids/view-all" },
            ],
        },
        {
            name: "تسوق حسب المنتج",
            links: [
                { name: "اظهار الكل", link: "./kids/view-all" },
                { name: "وصل حديثاً", link: "./kids/view-all" },
                {
                    name: "الملابس",
                    link: "./kids/view-all",
                },
                { name: "الأحذية", link: "./kids/view-all" },
                { name: "الإكسسوارات", link: "./kids/view-all" },
                { name: "ملابس الخروج", link: "./kids/view-all" },
                { name: "الملابس الرياضية", link: "./kids/view-all" },
            ],
        },
    ];

    // استبعاد حقل الاسم من الاختيارات المحددة
    const selectedFiltersArray = Object.entries(selectedFilters)
        .filter(([key, value]) => value && key !== "name")
        .map(([Filter, value]) => ({ Filter, value }));

    return (
        <div className="flex flex-col px-6">
            <div className="text-center text-sm flex justify-center my-3">
                <Link to="/" className="px-1">
                    الصفحة الرئيسية
                </Link>{" "}
                /
                <Link to="/kids" className="px-1">
                    الاطفال
                </Link>{" "}
                /
                <Link to="/kids/view-all" className="px-1">
                    عرض الكل
                </Link>
            </div>
            <div className="flex justify-between mt-5">
                <aside className="w-[235px] hidden xl:flex flex-col gap-4">
                    {sideLists.map((list, index) => (
                        <div className="flex flex-col gap-4 " key={index}>
                            <h3 className="font-bold">{list.name}</h3>
                            <ul className="flex flex-col gap-2">
                                {list.links.map((link, index) => (
                                    <LinkLi href="#" text={link.name} key={index} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </aside>
                <main className="flex flex-col flex-1">
                    <h1 className="sm:text-5xl text-3xl text-center sm:text-start mb-8">
                        الأولاد 9-14 سنوات
                    </h1>
                    <Filters products={filteredProducts} updateFilter={updateFilter} />
                    {selectedFiltersArray.length > 0 && (
                        <div className="flex gap-2 items-center flex-col sm:flex-row border sm:border-none p-2 lg:h-[50px]">
                            <div className=" font-bold whitespace-nowrap text-center sm:text-start py-3">
                                الاختيارات المحددة
                            </div>
                            <div className="flex gap-3 flex-wrap justify-center">
                                {selectedFiltersArray.map((filter, index) => {
                                    if (!filter.value) return null;
                                    return (
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
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    <div className=" flex-wrap flex justify-between md:justify-start mt-5">
                        {filteredProducts.map((product, index) => (
                            <Product img={product.image} name={product.name} price={product.price} key={index} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductsList;

const Filters = ({
    products,
    updateFilter,
}) => {
    const colorCounts = products.reduce((acc, product) => {
        acc[product.color] = (acc[product.color] || 0) + 1;
        return acc;
    }, {});

    const priceCounts = products.reduce((acc, product) => {
        acc[product.price] = (acc[product.price] || 0) + 1;
        return acc;
    }, {});

    const sizeCounts = products.reduce((acc, product) => {
        acc[product.size] = (acc[product.size] || 0) + 1;
        return acc;
    }, {});

    const categoryCounts = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});

    const colorCountArray = Object.entries(colorCounts).map(([name, count]) => ({ name, count: Number(count) }));
    const priceCountArray = Object.entries(priceCounts).map(([price, count]) => ({ name: Number(price), count: Number(count) }));
    const sizeCountArray = Object.entries(sizeCounts).map(([name, count]) => ({ name, count: Number(count) }));
    const categoryCountArray = Object.entries(categoryCounts).map(([category, count]) => ({ name: category, count: Number(count) }));

    return (
        <div className="flex flex-wrap gap-2 my-2 justify-evenly sm:justify-start">
            <SortBy />
            <FilterBy FilterName="السعر" filter="price" filters={priceCountArray} updateFilter={updateFilter} />
            <FilterBy FilterName="المقاس" filter="size" filters={sizeCountArray} updateFilter={updateFilter} />
            <FilterBy FilterName="اللون" filter="color" filters={colorCountArray} updateFilter={updateFilter} />
            <FilterBy FilterName="التصنيف" filter="category" filters={categoryCountArray} updateFilter={updateFilter} />
        </div>
    );
};

