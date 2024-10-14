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
                    <div className="flex gap-2 border px-2 py-1 items-center justify-center">
                        <span className="flex items-center justify-center text-sm">
                            {category === 'kids'
                                ? 'اطفال'
                                : category === 'men'
                                ? 'رجال'
                                : category === 'women'
                                ? 'نساء'
                                : category}
                        </span>
                        <button>
                            <MdClose
                                className="size-[18px] sm:size-[24px]"
                                onClick={() =>
                                    setSearchParams((prev) => {
                                        prev.delete('category')
                                        return prev
                                    })
                                }
                            />
                        </button>
                    </div>
                )}
                {price && (
                    <div className="flex gap-2 border px-2 py-1 items-center justify-center">
                        <span className="flex items-center justify-center text-sm">
                            {price}
                        </span>
                        <button>
                            <MdClose
                                className="size-[18px] sm:size-[24px]"
                                onClick={() =>
                                    setSearchParams((prev) => {
                                        prev.delete('price')
                                        return prev
                                    })
                                }
                            />
                        </button>
                    </div>
                )}
                {color && (
                    <div className="flex gap-2 border px-2 py-1 items-center justify-center">
                        <span className="flex items-center justify-center text-sm">
                            {color}
                        </span>
                        <button>
                            <MdClose
                                className="size-[18px] sm:size-[24px]"
                                onClick={() =>
                                    setSearchParams((prev) => {
                                        prev.delete('color')
                                        return prev
                                    })
                                }
                            />
                        </button>
                    </div>
                )}
                {size && (
                    <div className="flex gap-2 border px-2 py-1 items-center justify-center">
                        <span className="flex items-center justify-center text-sm">
                            {size}
                        </span>
                        <button>
                            <MdClose
                                className="size-[18px] sm:size-[24px]"
                                onClick={() =>
                                    setSearchParams((prev) => {
                                        prev.delete('size')
                                        return prev
                                    })
                                }
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SelectedFilters
