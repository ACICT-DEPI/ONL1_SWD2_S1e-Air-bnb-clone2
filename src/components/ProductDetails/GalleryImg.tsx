import React, { useState, useEffect } from 'react';

function GalleryImg({ src, alt, placeholder, className }) {
    const [imgSrc, setImgSrc] = useState(src || placeholder); 
    useEffect(() => {
        if (src) {
            setImgSrc(src);
        }
    }, [src]);
    
    const handleError = () => {
        placeholder='https://placehold.co/445x668?text=loading..'
        setImgSrc(placeholder);
    };

    return (
        <div>
            <img
                src={imgSrc}
                alt={alt}
                className={className}
                onError={handleError} 
            />
        </div>
    );
}

export default GalleryImg;
