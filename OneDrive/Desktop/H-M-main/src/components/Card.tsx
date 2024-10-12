import React from "react";

const Card = ({
    name,
    image,
    price,
}: {
    name: string;
    image: string;
    price: number;
}) => {
    return (
        <div className="min-w-[245px] h-[411px] px-2">
            <div className="flex flex-col h-full">
                <a
                    href="#
                "
                >
                    <div className="w-full">
                        <img src={image} alt="" />
                    </div>
                </a>
                <div className="flex flex-col text-sm mt-auto">
                    <p>{name}</p>
                    <p>{`${price.toFixed(2)} ج.م`}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
