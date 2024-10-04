import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterBy = ({ FilterName }: { FilterName: string }) => {
    const [showFilter, setshowFilter] = useState(false);
    const [enableScroll, setEnableScroll] = useState(false);
    useEffect(() => {
        if (showFilter) {
            const timer = setTimeout(() => {
                setEnableScroll(true);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setEnableScroll(false);
        }
    }, [showFilter]);
    return (
        <div className="relative">
            <div
                className={`fixed z-[60] inset-0 bg-transparent    ${
                    showFilter ? "block" : "hidden"
                }`}
                onClick={() => {
                    setshowFilter(false);
                }}
            ></div>
            <button
                className="flex justify-between items-center px-2 "
                onClick={() => setshowFilter(!showFilter)}
            >
                <span className="pl-2 text-sm font-bold">{FilterName}</span>
                <MdKeyboardArrowDown
                    size={25}
                    className={`text-slate-500 duration-300 ${
                        showFilter && "rotate-180 text-red-500"
                    }`}
                />
            </button>

            <ul
                className={`absolute top-[100%] z-[70] right-0 w-[220px] flex flex-col gap-4 duration-300  border origin-top ${
                    !showFilter
                        ? "max-h-0 border-transparent bg-transparent"
                        : "max-h-[280px] bg-white"
                } ${enableScroll ? "overflow-y-auto" : "overflow-hidden"}`}
            >
                <li className="relative text-start px-[24px] py-[16px] hover:bg-[#f4eddd] flex items-center gap-2">
                    ما نوصي به
                </li>
            </ul>
        </div>
    );
};

export default FilterBy;
