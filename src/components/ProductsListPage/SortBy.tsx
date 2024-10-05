import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SortBy = () => {
    const [showSort, SetshowSort] = useState(false);
    const [enableScroll, setEnableScroll] = useState(false);
    useEffect(() => {
        if (showSort) {
            const timer = setTimeout(() => {
                setEnableScroll(true);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setEnableScroll(false);
        }
    }, [showSort]);

    return (
        <div className="relative">
            <div
                className={`fixed z-[60] inset-0 bg-transparent    ${
                    showSort ? "block" : "hidden"
                }`}
                onClick={() => {
                    SetshowSort(false);
                }}
            ></div>
            <button
                className="flex justify-between items-center px-2 "
                onClick={() => SetshowSort(!showSort)}
            >
                <span className="pl-2 text-sm font-bold">رتب حسب</span>
                <MdKeyboardArrowDown
                    size={25}
                    className={` duration-300 ${
                        showSort ? "rotate-180 text-red-500" : "text-slate-500 "
                    }`}
                />
            </button>
            <ul
                className={`absolute top-[100%] z-[70] right-0 w-[220px] flex flex-col gap-4 duration-300  border origin-top ${
                    !showSort
                        ? "max-h-0 border-transparent bg-transparent"
                        : "max-h-[280px] bg-white"
                } ${enableScroll ? "overflow-y-auto" : "overflow-hidden"}`}
            >
                <li className="relative text-start px-[24px] py-[16px] hover:bg-[#f4eddd] flex items-center gap-2">
                    <span className="p-[2px] bg-white size-5 border border-black rounded-full flex items-center justify-center">
                        <input
                            type="checkbox"
                            className="absolute peer opacity-0 left-0 top-0 w-full h-full cursor-pointer"
                        />
                        <span className="size-3 inline-block rounded-full bg-transparent peer-checked:bg-black"></span>
                    </span>
                    ما نوصي به
                </li>
            </ul>
        </div>
    );
};

export default SortBy;
