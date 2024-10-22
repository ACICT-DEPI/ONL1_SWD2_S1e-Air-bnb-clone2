// BabyList.tsx
import React from 'react';
import ProductsList from './ProductsList';

const BabyList = () => {
    return (
        <ProductsList
            defaultCategory="Baby"
            headerTitle="منتجات الأطفال"
        />
    );
};

export default BabyList;
