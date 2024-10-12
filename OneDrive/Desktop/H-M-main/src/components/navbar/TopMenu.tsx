import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
    return (
        <div className=" mx-auto w-fit   justify-center items-center sm:py-1 py-0 hidden lg:flex">
            <ul className="flex gap-2 text-sm font-normal ">
                <li>
                    <Link to="/register">تسجيل مستخدم جديد</Link>
                </li>
                <li>
                    <Link to="/login">تسجيل الدخول</Link>
                </li>
                <li>
                    <a href="#">البحث عن محلاتنا</a>
                </li>
                <li>
                    <a href="#">English</a>
                </li>
            </ul>
        </div>
    );
};

export default TopMenu;
