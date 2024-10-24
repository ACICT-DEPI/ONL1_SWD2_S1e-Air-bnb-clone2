import React, { useState } from "react";
import Product from "./ProductCard";
import { WishlistItem } from "../../routes/WishListContext";

const ProductsContainer = ({ products }: { products: WishlistItem[] }) => {
    const [productsNumber, setProductsNumber] = useState(12);

    const loadMore = () => {
        setProductsNumber(productsNumber + 12);
    };

    return (
        <>
            <div className="flex flex-wrap justify-center xl:justify-start mt-5">
                {products.slice(0, productsNumber).map((product) => (
                    <Product
                        key={product.id}
                        img={product.image}
                        name={product.name}
                        price={product.price}
                        id={product.id}
                    />
                ))}
            </div>
            {products.length > productsNumber && (
                <div className="w-full items-center justify-center flex">
                    <button
                        onClick={loadMore}
                        className="w-fit mx-auto text-center text-white bg-black px-10 py-1"
                    >
                        تحميل المزيد من المنتجات
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductsContainer;
