import React, { useEffect, useMemo, useState } from "react";
import Card from "./Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { shuffleArray } from "../utils";

const Carousel = ({
    prodcuts,
}: {
    prodcuts: { name: string; image: string; price: number }[];
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(1);

    const updateItemsPerSlide = () => {
        if (window.innerWidth < 640) {
            setItemsPerSlide(1);
        } else if (window.innerWidth < 1024) {
            setItemsPerSlide(2);
        } else {
            setItemsPerSlide(4);
        }
    };
    window.addEventListener("resize", updateItemsPerSlide);

    useEffect(() => {
        updateItemsPerSlide();
    }, []);

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };
    const nextSlide = () => {
        if (currentIndex < Math.floor(prodcuts.length / itemsPerSlide) - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const shuffledArray = useMemo(() => shuffleArray(prodcuts), [prodcuts]);
    return (
        <div className="relative w-full lg:px-4">
            <div className="overflow-hidden w-[245px] sm:w-[490px] lg:w-[980px] mx-auto">
                <div
                    className=" flex  duration-1000 ease-out"
                    style={{
                        transform: `translateX(${currentIndex * 100}%)`,
                    }}
                >
                    {shuffledArray.map((product, index) => (
                        <Card
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <button
                className={`absolute top-[40%] transform -translate-y-1/2 -right-3   p-1   ${currentIndex === 0 ? "hidden" : ""}  `}
                onClick={prevSlide}
                disabled={currentIndex === 0}
            >
                <IoIosArrowForward size={32} />
            </button>
            <button
                className={`absolute top-[40%]  transform -translate-y-1/2 -left-3   p-1 
                    ${currentIndex >=
                        Math.floor(prodcuts.length / itemsPerSlide) - 1
                        ? "opacity-25"
                        : ""
                    } `}
                onClick={nextSlide}
                disabled={
                    currentIndex >=
                    Math.floor(prodcuts.length / itemsPerSlide) - 1
                }
            >
                <IoIosArrowBack size={32} />
            </button>
            <div className="flex gap-2 items-center justify-center w-full mt-5">
                {[...Array(Math.floor(prodcuts.length / itemsPerSlide))].map(
                    (_, index) => (
                        <button
                            key={index}
                            className={`${currentIndex === index
                                ? "bg-[#e50010] border-none"
                                : "bg-white"
                                } size-2 border rounded-full border-black`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    )
                )}
            </div>
        </div>
    );
};

export default Carousel;
