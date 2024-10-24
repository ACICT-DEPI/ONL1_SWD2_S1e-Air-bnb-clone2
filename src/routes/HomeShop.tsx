// HomeShop.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryShop from './CategoryShop';

const HomeShop: React.FC = () => {
    const navigate = useNavigate(); 

    
    const handleNavigate = () => {
        navigate('/home/view-all'); 
    };

    return (
        <CategoryShop
            category="Home"
            header="ديكور وأثاث منزلي"
            text="أضف لمسة مميزة إلى منزلك من خلال مجموعة من التصاميم العصرية والأنماط الحديثة."
            link="#"
            linkText="تسوق الآن"
            coverHeader="اكتشف روائع ديكورات المنزل"
            coverImg="https://cdn-eu.dynamicyield.com/api/9876644/images/c3699f51c68a__7139b-3x2-room-fragrances-scent-guide-floral-fresh-fruity-spicy-woody.webp"
            coverSmallImg="https://cdn-eu.dynamicyield.com/api/9876644/images/32a0e9ac8d8da__ms50ee-outdoor-apparel-3x2.webp"
            coverText="ارتقِ بأجواء منزلك مع تشكيلتنا الجديدة من الأثاث والديكور."
            secondaryImg="https://cdn-eu.dynamicyield.com/api/9876644/images/dd4fd498a835__7020d-3x2-fn.webp"
            description={[
                'استمتع بديكورات ملهمة تتناسب مع كل الأذواق.',
                'تصاميم تجمع بين الراحة والأناقة لتلبية احتياجات منزلك.'
            ]}
            onButtonClick={handleNavigate}
        />
    );
};

export default HomeShop;
