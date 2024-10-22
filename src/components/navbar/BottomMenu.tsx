// BottomMenu.tsx
import React from "react";
import { Link } from "react-router-dom";

const BottomMenu = () => {
    return (
        <div className="gap-2 items-center justify-center my-auto hidden lg:flex">
            <ul className="flex gap-4 text-base">
                <li className="hover:border-black border-transparent border-b-2 pb-1">
                    <Link to="/women">النساء</Link>
                </li>
                <li className="hover:border-black border-transparent border-b-2 pb-1">
                    <Link to="/men">الرجال</Link>
                </li>
                <li className="hover:border-black border-transparent border-b-2 pb-1">
                    <Link to="/baby">الرضع</Link> {/* Updated path for Baby */}
                </li>
                <li className="hover:border-black border-transparent border-b-2 pb-1">
                    <Link to="/kids">الأطفال</Link>
                </li>
                <li className="hover:border-black border-transparent border-b-2 pb-1">
                    <Link to="/home">اتش اند ام هوم</Link> {/* Updated path for Home */}
                </li>
                <li className="hover:border-black border-transparent border-b-2 pb-1">
                    <Link to="/sports">الملابس الرياضية</Link>
                </li>
                <li className="hover:border-black border-transparent border-b-2 pb-1">
                    <Link to="/discounts">التنزيلات</Link>
                </li>
            </ul>
        </div>
    );
};

export default BottomMenu;
