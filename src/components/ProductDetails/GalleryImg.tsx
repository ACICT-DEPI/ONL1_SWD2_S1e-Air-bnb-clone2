import React, { useState, useEffect } from 'react';

function GalleryImg({ src, alt, placeholder, className }) {
    const [imgSrc, setImgSrc] = useState(src || placeholder); // Default to placeholder if src is not available
    useEffect(() => {
        // Update the image source whenever the src prop changes
        if (src) {
            setImgSrc(src);
        }
    }, [src]);
    
    const handleError = () => {
        // Set the placeholder image if the main image fails to load
        placeholder='https://placehold.co/445x668?text=loading..'
        setImgSrc(placeholder);
    };

    return (
        <div>
            <img
                src={imgSrc}
                alt={alt}
                className={className}
                onError={handleError} // Handle error by setting placeholder
            />
        </div>
    );
}

export default GalleryImg;
