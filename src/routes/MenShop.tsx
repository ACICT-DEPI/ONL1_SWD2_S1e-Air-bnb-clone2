import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryShop from './CategoryShop';

const MenShop: React.FC = () => {
    const navigate = useNavigate(); // Hook to navigate

    // Function to handle navigation to MenList
    const handleNavigate = () => {
        navigate('/men/view-all'); // Adjust the path based on your routing structure
    };

    return (
        <CategoryShop
            category="Men" // Update the category for Men
            header="أحدث صيحات الموضة للرجال"
            text="ملابس أنيقة وعصرية"
            link="#"
            linkText="تسوق الآن"
            coverHeader="ملابس عصرية للرجال"
            coverImg="https://cdn-eu.dynamicyield.com/api/9876644/images/32cbf322b607d__ms50caa-elevated-fall-fits-3x2.webp"
            coverSmallImg="https://cdn-eu.dynamicyield.com/api/9876644/images/32a0e9ac8d8da__ms50ee-outdoor-apparel-3x2.webp"
            coverText="تصاميم أنيقة للرجل العصري"
            secondaryImg="https://cdn-eu.dynamicyield.com/api/9876644/images/32a0e9ac8d8da__ms50ee-outdoor-apparel-3x2.webp" // صورة مختلفة للفئة
            description={['تشكيلة ملابس الرجال...', 'أضف لمسة عصرية...']}
            onButtonClick={handleNavigate} // Pass the navigation function to CategoryShop
        />
    );
}

export default MenShop;
