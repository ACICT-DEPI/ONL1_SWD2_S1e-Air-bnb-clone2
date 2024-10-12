import { useState } from 'react';
import React from 'react';
function GalleryImg({ src, alt, placeholder, className }) {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
        setImgSrc(placeholder);
    };

    return <>
    <div >

        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
        />
    </div>
    </>
}
export default GalleryImg