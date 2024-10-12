import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Discount = () => {
    return (
        <div className="w-full bg-[#c9002e] lg:h-[225px] flex flex-col items-center justify-between text-white py-5 gap-5">
            <p className="text-2xl lg:text-3xl font-bold text-white">
                تنزيلات لغاية 70%
            </p>
            <p className="text-lg lg:text-2xl font-bold text-white">
                في محلاتنا واونلاين
            </p>
            <div className="hidden lg:flex  justify-center gap-4 ">
                <a
                    href="#"
                    className="bg-transparent border px-5 py-1 text-white "
                >
                    النساء
                </a>
                <a
                    href="#"
                    className="bg-transparent border px-5 py-1 text-white "
                >
                    الرجال
                </a>
                <a
                    href="#"
                    className="bg-transparent border px-5 py-1 text-white "
                >
                    الأطفال
                </a>
                <a
                    href="#"
                    className="bg-transparent border px-5 py-1 text-white "
                >
                    اتش آند ام هوم{" "}
                </a>
            </div>
            <p className="text-xs">يسري العرض حتى نفاذ الكمية.</p>
        </div>
    );
};

export default Discount;
