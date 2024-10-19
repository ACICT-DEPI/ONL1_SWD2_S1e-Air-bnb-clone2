import React from 'react'
import { Link } from 'react-router-dom'

const BottomMenu = () => {
    return (
        <div className=" gap-2 items-center justify-center my-auto  hidden lg:flex">
            <ul className="flex gap-4 text-base  ">
                <li
                    className="hover:border-black border-transparent border-b-2 pb-1
                "
                >
                    <Link to="/women">النساء</Link>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <Link to="/men/view-all">الرجال</Link>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <Link to="/baby/view-all">الرضع</Link>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <Link to="/kids/view-all">الاطفال</Link>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <Link to="/home/view-all">اتش اند ام هوم</Link>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <Link to="/sports/view-all">الملابس الرياضية</Link>
                </li>
            </ul>
        </div>
    )
}

export default BottomMenu
