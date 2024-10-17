import React from 'react'
import { MdClose } from 'react-icons/md'
import { useParams, useSearchParams } from 'react-router-dom'

const SelectedFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const price = searchParams.get('price')
    const color = searchParams.get('color')
    const size = searchParams.get('size')
    const category = searchParams.get('category')

    return (
        <div className="flex gap-2 items-center flex-col sm:flex-row border sm:border-none p-2 lg:h-[50px]">
            <div className=" font-bold whitespace-nowrap text-center sm:text-start py-3">
                الاختيارات المحددة
            </div>
            <div className="flex gap-3 flex-wrap justify-center  ">
                {category && (
                    <FilterItem
                        FilterName={'category'}
                        value={
                            category === 'kids'
                                ? 'اطفال'
                                : category === 'men'
                                ? 'رجال'
                                : category === 'women'
                                ? 'نساء'
                                : category
                        }
                        setSearchParams={setSearchParams}
                    />
                )}
                {price && (
                    <FilterItem
                        FilterName={'price'}
                        value={price}
                        setSearchParams={setSearchParams}
                    />
                )}
                {color && (
                    <FilterItem
                        FilterName={'color'}
                        value={color}
                        setSearchParams={setSearchParams}
                    />
                )}
                {size && (
                    <FilterItem
                        FilterName={'size'}
                        value={size}
                        setSearchParams={setSearchParams}
                    />
                )}
            </div>
        </div>
    )
}

export default SelectedFilters

const FilterItem = ({ value, FilterName, setSearchParams }) => {
    return (
        <div className="flex   h-[32px]  items-center justify-center">
            <span className="flex items-center justify-center px-4 text-sm font-light bg-white h-full">
                {value}
            </span>
            <button
                className="h-full bg-[#f9f1ef]  px-2"
                onClick={() =>
                    setSearchParams((prev) => {
                        prev.delete(FilterName)
                        return prev
                    })
                }
            >
                <MdClose className="size-[18px] sm:size-[24px] font-thin opacity-70" />
            </button>
        </div>
    )
}
