import React from "react";

const BottomMenu = () => {
    return (
        <div className=" gap-2 items-center justify-center my-auto  hidden lg:flex">
            <ul className="flex gap-4 text-base  ">
                <li
                    className="hover:border-black border-transparent border-b-2 pb-1
                "
                >
                    <a href="./women/view-all">النساء</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">الرجال</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">الرضع</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">الاطفال</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">اتش اند ام هوم</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">الملابس الرياضية</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">التنزيلات</a>
                </li>
            </ul>
        </div>
    );
};

export default BottomMenu;
