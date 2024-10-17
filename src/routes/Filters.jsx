// FiltersComponent.jsx

import React from "react";
import FilterBy from "../components/ProductsListPage/filters/FilterBy"; // استيراد مكون FilterBy لعرض الفلاتر

const Filters = ({ products, updateFilter }) => {
    // حساب عدد المنتجات لكل فلتر
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

    // تحويل البيانات إلى مصفوفات
    const colorCountArray = Object.entries(colorCounts).map(
        ([name, count]) => ({ name, count })
    );
    const priceCountArray = Object.entries(priceCounts).map(
        ([price, count]) => ({ name: Number(price), count })
    );
    const sizeCountArray = Object.entries(sizeCounts).map(
        ([name, count]) => ({ name, count })
    );
    const categoryCountArray = Object.entries(categoryCounts).map(
        ([category, count]) => ({ name: category, count })
    );

    return (
        <div className="flex flex-wrap gap-2 my-2 justify-evenly sm:justify-start">
            {/* عرض الفلاتر باستخدام مكون FilterBy */}
            <FilterBy
                FilterName="السعر"
                filter="price"
                filters={priceCountArray}
                updateFilter={updateFilter}
            />
            <FilterBy
                FilterName="المقاس"
                filter="size"
                filters={sizeCountArray}
                updateFilter={updateFilter}
            />
            <FilterBy
                FilterName="اللون"
                filter="color"
                filters={colorCountArray}
                updateFilter={updateFilter}
            />
            <FilterBy
                FilterName="التصنيف"
                filter="category"
                filters={categoryCountArray}
                updateFilter={updateFilter}
            />
        </div>
    );
};

export default Filters;
