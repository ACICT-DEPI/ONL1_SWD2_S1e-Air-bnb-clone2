import React, { useState } from "react";

const TrendingFilters = () => {
    const [filter, setFilter] = useState("الاطفال");
    const Filters = [
        { name: "النساء" },
        { name: "الاطفال" },
        { name: "الرجال" },
        { name: "الرضع" },
        { name: "هوم" },
        { name: "الملابس الرياضة" },
        { name: "التنزيلات" },
    ];
    const Filter = ({ text }: { text: string }) => {
        return (
            <button
                className={`text-base duration-1000 transition-all rounded-full border px-3 py-1 
                ${
                    filter === text
                        ? "bg-[#e50010] text-white border-transparent"
                        : "border-black bg-white text-black"
                }`}
                onClick={() => setFilter(text)}
            >
                {text}
            </button>
        );
    };
    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            {Filters.map((filter, index) => (
                <Filter text={filter.name} key={index} />
            ))}
        </div>
    );
};

export default TrendingFilters;
