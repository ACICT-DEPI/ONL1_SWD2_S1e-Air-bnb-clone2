// BabyShop.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryShop from './CategoryShop';

const BabyShop: React.FC = () => {
    const navigate = useNavigate(); // Hook to navigate

    // Navigate to Baby category page
    const handleNavigate = () => {
        navigate('/baby/view-all'); // Adjust the path
    };

    return (
        <CategoryShop
            category="Baby"
            header="أحدث الملابس للأطفال"
            text="راحة وأناقة لطفلك"
            link="#"
            linkText="تسوق الآن"
            coverHeader="ملابس مريحة للأطفال"
            coverImg="https://cdn-eu.dynamicyield.com/api/9876644/images/1fa4de59c1a6d__4170c-3x2-1-autumn-softness.webp"
            coverSmallImg="https://example.com/baby-small.webp"
            coverText="أفضل الملابس لطفلك الصغير"
            secondaryImg="https://cdn-eu.dynamicyield.com/api/9876644/images/1493f63f2c840__w41-tck-baby-3x2.webp"
            description={['تشكيلة جديدة للأطفال...', 'أناقة مريحة في كل مناسبة...']}
            onButtonClick={handleNavigate}
        />
    );
};

export default BabyShop;
