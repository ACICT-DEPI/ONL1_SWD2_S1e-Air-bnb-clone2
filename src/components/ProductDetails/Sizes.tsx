import React ,{useState} from 'react';
import SizeGuide from './SizeGuide';

const Sizes = ({ selectedSize, setSelectedSize ,defaultSize }) => {
    // Handle the size click
    if(!selectedSize){setSelectedSize(defaultSize)}
    const handleSizeClick = (size) => {
        setSelectedSize(size);  
    };

    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

    const openSizeGuide = () => {
        setIsSizeGuideOpen(true);
    };

    const closeSizeGuide = () => {
        setIsSizeGuideOpen(false);
    };

    return (
        <div className="size mt-3">
            <div className="flex flex-row justify-between">
                <div className="selected-size text-sm">
                    المقاس: {selectedSize ? selectedSize : 'اختر المقاس'}
                </div>
                <div
                    className="text-sm text-gray-500 hover:text-black cursor-pointer"
                    onClick={openSizeGuide}
                >
                    دليل المقاسات
                </div>
            </div>
            {isSizeGuideOpen && <SizeGuide closeSizeGuide={closeSizeGuide} />}
            
            <ul className="flex flex-row mt-4 gap-3">
                {['XXS', 'XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <li key={size}>
                        <span
                            onClick={() => handleSizeClick(size)}
                            className={`border border-black p-2 px-4 cursor-pointer transition-all ${selectedSize === size ? 'bg-black text-white' : ''
                                } hover:bg-gray-600 hover:text-white`}
                        >
                            {size}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sizes;
