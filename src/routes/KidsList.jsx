import React from 'react';
import ProductsList from './ProductsList';

const KidsList = () => {
    return (
        <ProductsList
            defaultCategory="Kids" // تعيين الفئة الافتراضية إلى "Kids"
            headerTitle="منتجات الأطفال" // عنوان الصفحة
        />
    );
};

export default KidsList;
