import React from "react";
import YouMayLike from "../components/ProductDetails/YouMayLike";
import ProductGallery from "../components/ProductDetails/ProductGallery";
import SideBar from "../components/ProductDetails/SideBar";
import Recommendations from "../components/ProductDetails/Recommendations";
import More from "../components/ProductDetails/More";
const Product = () => {
    return (
        <>
            <div className="product-MainContainer h-full flex flex-col lg:flex-row  mt-16  m-8 sm:flex-col">
                <ProductGallery />
                <SideBar />
            </div>
            <div className="w-50 flex items-center justify-center">
                <YouMayLike />
            </div>
            <div className="w-50 flex items-center justify-center mt-7">
                <Recommendations />
            </div>
            <div className="w-50 flex flex-col items-center justify-center mt-7">
                <More />
            </div>
        </>
    );
};

export default Product;
