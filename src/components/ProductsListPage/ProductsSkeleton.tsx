import React from 'react'

const ProductsSkeleton = () => {
    return (
        <div className=" flex-wrap flex justify-between md:justify-start mt-5">
            {[...Array(10)].map((_, index) => (
                <div
                    key={index}
                    className="px-2 xl:w-[280px] w-1/2 md:w-1/3 h-[329px] lg:h-[450px] mb-[55px]"
                >
                    <div
                        key={index}
                        className=" w-full h-full bg-gray-200 animate-pulse"
                    />
                </div>
            ))}
        </div>
    )
}

export default ProductsSkeleton
