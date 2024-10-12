import React from "react";
import { Heart, ShoppingBag } from "lucide-react";

const Actions = () => {
    return (
        <div className="flex min-w-fit gap-7 font-light items-center justify-end  w-1/4 sm:order-3 order-2 lg:order-none">
            <Heart size={35} strokeWidth={1} />
            <ShoppingBag size={35} strokeWidth={1} className="light" />
        </div>
    );
};

export default Actions;
