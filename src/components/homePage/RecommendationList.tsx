import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const RecommendationList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };
    const nextSlide = () => {
        if (currentIndex < 2) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    return (
        <div className="relative  py-5 ">
            <ul
                className="flex items-center justify-evenly xl:gap-5 lg:text-xs text-sm"
                style={{
                    transform: `translateX(${currentIndex * 100}%)`,
                }}
            >
                <li className="min-w-full lg:min-w-0 lg:w-fit text-center">
                    <a href="#">التوصيل المجاني للطلبيات الأكثر من 1999 ج.م</a>
                </li>
                <li className="min-w-full lg:min-w-0 lg:w-fit text-center">
                    <a href="#">
                        خدمة الإرجاع مجاناً متوفرة أونلاين وفي المحلات
                    </a>
                </li>
                <li className="min-w-full lg:min-w-0 lg:w-fit text-center">
                    <a href="#">تسوق أونلاين 24/7</a>
                </li>
            </ul>
            <button
                className={`absolute top-1/2 transform -translate-y-1/2 -right-[1rem]  p-2  
                       ${currentIndex === 0 ? "hidden" : ""}  lg:hidden`}
                onClick={prevSlide}
                disabled={currentIndex === 0}
            >
                <IoIosArrowForward size={32} />
            </button>
            <button
                className={`absolute top-1/2 transform -translate-y-1/2 -left-[1rem]  p-2 
                       ${currentIndex >= 2 ? "opacity-25" : ""} lg:hidden`}
                onClick={nextSlide}
                disabled={currentIndex >= 2}
            >
                <IoIosArrowBack size={32} />
            </button>
        </div>
    );
};

export default RecommendationList;
