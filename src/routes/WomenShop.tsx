import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryShop from './CategoryShop';

const WomenShop: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/women/view-all'); // Navigate to the WomenList page
    };

    return (
        <CategoryShop
            category="Women"
            header="تشكيلة تتميز بدرجات اللون الوردي"
            text="مع كشكة ناعمة وطبعات زهور مميزة"
            link="#"
            linkText="تسوقي هنا"
            coverHeader="خياطة عصرية"
            coverImg="https://cdn-eu.dynamicyield.com/api/9876644/images/4ffaed093fe0__fnp-ws50e-ns-3x2-1.webp"
            coverSmallImg="https://cdn-eu.dynamicyield.com/api/9876644/images/47e437275515__fnp-ws50e-ns-1x1-1.webp"
            coverText="تصاميم انيقة باللون الرمادي والازرق والبني"
            secondaryImg="https://cdn-eu.dynamicyield.com/api/9876644/images/17ad4d28f6475__ds50b-3x2-1.webp"
            description={[
                'تقدم لكِ اتش آند ام كل أساسيات الموضة...',
                'تجربة تسوق تلبي احتياجاتك...',
            ]}
            onButtonClick={handleNavigate} 
        />
    );
};

export default WomenShop;
