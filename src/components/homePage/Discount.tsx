import React from "react";
import { Link } from "react-router-dom"; // استيراد Link من react-router-dom

const Discount = () => {
    return (
        <div className="w-full bg-[#c9002e] lg:h-[225px] flex flex-col items-center justify-between text-white py-5 gap-5">
            <p className="text-2xl lg:text-3xl font-bold text-white">
                تنزيلات لغاية 70%
            </p>
            <p className="text-lg lg:text-2xl font-bold text-white">
                في محلاتنا واونلاين
            </p>
            <div className="hidden lg:flex justify-center gap-4">
                <Link
                    to="/women"
                    className="bg-transparent border px-5 py-1 text-white"
                >
                    النساء
                </Link>
                <Link
                    to="/men"
                    className="bg-transparent border px-5 py-1 text-white"
                >
                    الرجال
                </Link>
                <Link
                    to="/kids"
                    className="bg-transparent border px-5 py-1 text-white"
                >
                    الأطفال
                </Link>
                <Link
                    to="/home"
                    className="bg-transparent border px-5 py-1 text-white"
                >
                    اتش آند ام هوم
                </Link>
            </div>
            <p className="text-xs">يسري العرض حتى نفاذ الكمية.</p>
        </div>
    );
};

export default Discount;
