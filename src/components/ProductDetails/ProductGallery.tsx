import React from "react"
import GalleryImg from "./GalleryImg"
const ProductGallery = ({ images = [],description }) => {
    return <>
        <div className="gallery-container w-2/3 flex flex-col gap-3">
            <div className="details-Gallery flex lg:flex-row sm:flex-col gap-3">
                <GalleryImg
                    src={images[0]}
                    alt='something may went wrong'
                    placeholder="src\components\ProductDetails\placeHolder.jfif"
                    className="w-full h-full object-cover"
                />
                <GalleryImg
                    src={images[1]}
                    alt='something may went wrong'
                    placeholder="src\components\ProductDetails\placeHolder.jfif"
                    className="w-full h-full object-cover"
                />

            </div>
            <div className="details-box bg-white p-16 w-full">
                <div className="describtion">{description}</div>
                <div className="piece-no pt-9">رقم القطعة : 1210630036</div>
                <button className="pt-6">تفاصيل المنتج</button>
            </div>
            <div className="details-Gallery flex flex-col lg:flex-row sm:flex-col gap-4">
                <GalleryImg
                    src={images[2]}
                    alt='something may went wrong'
                    placeholder="src\components\ProductDetails\placeHolder.jfif"
                    className="w-full h-full object-cover"
                />
                <GalleryImg
                    src={images[3]}
                    alt='something may went wrong'
                    placeholder="src\components\ProductDetails\placeHolder.jfif"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </>
}
export default ProductGallery