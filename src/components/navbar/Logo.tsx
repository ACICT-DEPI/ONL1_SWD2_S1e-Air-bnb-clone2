import React from "react";
import { Menu } from "lucide-react";

const Logo = () => {
    return (
        <div className="lg:w-1/2 w-1/4 flex justify-start lg:justify-center order-1  lg:order-none">
            <div className="lg:hidden">
                <Menu size={32} strokeWidth={1} className="mx-2" />
            </div>
            <div>
                <img
                    src="./site-logo.svg"
                    alt=""
                    className="lg:w-[70px] lg:h-[44px] w-[45px] h-[30px] mx-auto min-w-fit"
                />
            </div>
        </div>
    );
};

export default Logo;
