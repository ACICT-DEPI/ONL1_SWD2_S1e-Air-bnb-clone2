// SportsShop.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryShop from './CategoryShop';

const SportsShop: React.FC = () => {
    const navigate = useNavigate(); 

    
    const handleNavigate = () => {
        navigate('/sports/view-all'); 
    };

    return (
        <CategoryShop
            category="Sports"
            header="ملابس رياضية لأداء متميز"
            text="أداء رياضي بأناقة"
            link="#"
            linkText="تسوق الآن"
            coverHeader="تصاميم رياضية حديثة"
            coverImg="https://cdn-eu.dynamicyield.com/api/9876644/images/27c507ecb20c7__fnp-7460a-3x2.webp"
            coverSmallImg="https://example.com/sports-small.webp"
            coverText="كن مستعداً لأفضل أداء رياضي"
            secondaryImg="https://cdn-eu.dynamicyield.com/api/9876644/images/1c9559e96e2a1__7440b-3x2.webp"
            description={['تجهيزات كاملة للأداء...', 'الأناقة والراحة معاً...']}
            onButtonClick={handleNavigate}
        />
    );
};

export default SportsShop;
