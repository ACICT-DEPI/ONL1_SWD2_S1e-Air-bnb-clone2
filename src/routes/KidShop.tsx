import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import CategoryShop from './CategoryShop';

const KidShop: React.FC = () => {
    const navigate = useNavigate(); 

    
    const handleNavigate = () => {
        navigate('/kids/view-all'); 
    };

    return (
        <CategoryShop
            category="Kids" 
            header="ملابس أطفال مفعمة بالحياة"
            text="ألوان زاهية وتصاميم مميزة"
            link="#" 
            linkText="تسوق الآن"
            coverHeader="تصاميم مرحة للأطفال"
            coverImg="https://cdn-eu.dynamicyield.com/api/9876644/images/1c55fcc0321e4__4170a-3x2-1-enter-autumn-block3.webp"
            coverSmallImg="https://cdn-eu.dynamicyield.com/api/9876644/images/kids-small-cover.webp"
            coverText="ملابس مريحة لكل المناسبات"
            secondaryImg="https://cdn-eu.dynamicyield.com/api/9876644/images/3968e8231e26__w41-tck-kids-3x2.webp" // صورة مخصصة لفئة الأطفال
            description={[
                'تشكيلة ملابس الأطفال من اتش آند ام...',
                'أضف لمسة مرحة إلى خزانة طفلك...',
            ]}
            onButtonClick={handleNavigate}
        />
    );
}

export default KidShop;
