import React from "react"
import GalleryImg from "./GalleryImg"
const ProductGallery = ({ images = [],description , id }:{images:string[] , description:string , id:string}) => {
    return <>
        <div className="gallery-container w-2/3 flex flex-col gap-3">
            <div className="details-Gallery flex lg:flex-row sm:flex-col gap-3">
                <GalleryImg
                    src={images[0]}
                    alt={description}
                    placeholder="src\components\ProductDetails\placeHolder.jfif"
                    className="w-full h-full object-cover"
                />
                <GalleryImg
                    src={images[1]}
                    alt={description}
                    placeholder="src\components\ProductDetails\placeHolder.jfif"
                    className="w-full h-full object-cover"
                />

            </div>
            <div className="details-box bg-white p-16 w-full">
                <div className="describtion">{description}</div>
                <div className="piece-no pt-9">رقم القطعة : {id}</div>
                <button className="pt-6">تفاصيل المنتج</button>
            </div>
            <div className="details-Gallery flex flex-col lg:flex-row sm:flex-col gap-4">
                <GalleryImg
                    src={images[2]}
                    alt={description}
                    placeholder="src\components\ProductDetails\placeHolder.jfif"
                    className="w-full h-full object-cover"
                />
                <GalleryImg
                    src={images[3]}
                    alt={description}
                    placeholder="src\components\ProductDetails\placeHolder.jfif"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </>
}
export default ProductGallery