import React from "react";
import YouMayLike from "../components/ProductDetails/youMayLike";
import ProductGallery from "../components/ProductDetails/ProductGallery";
import SideBar from "../components/ProductDetails/SideBar";
const Product = () => {

    return <>
        <div className="product-MainContainer h-full flex  mt-16  m-8">
            <ProductGallery />
            <SideBar />
        </div>
        <div className="w-50 flex items-center justify-center">
            <YouMayLike />
        </div>
    </>
};

export default Product;
