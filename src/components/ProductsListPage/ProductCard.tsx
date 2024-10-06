import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({
    img,
    name,
    price,
}: {
    img: string;
    name: string;
    price: number;
}) => {
    return (
        <div className="sm:w-[280px] w-1/2 sm:h-[450px] mb-[55px] px-2 ">
            <div className="flex flex-col h-full">
                <Link to="#" className="relative hover:scale-105 duration-200">
                    <img
                        src={img}
                        alt=""
                        className="w-full sm:h-[395px] object-cover "
                    />
                    <Heart
                        strokeWidth={1}
                        className="absolute top-1 left-1 hover:fill-current hover:text-red-500 size-[25px] sm:size-[35px]"
                    />
                </Link>
                <div className="flex flex-col text-sm mt-4 sm:mt-auto">
                    <p className="whitespace-nowrap overflow-hidden">{name}</p>
                    <p>{`${price.toFixed(2)} ج.م`}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
