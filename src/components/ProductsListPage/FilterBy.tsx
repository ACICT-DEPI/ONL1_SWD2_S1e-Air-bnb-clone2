import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import useUrl from '../../utils/useUrl'
import { useSearchParams } from 'react-router-dom'

const FilterBy = ({
    FilterName,
    filters,
    filter,
}: {
    FilterName: string
    filters: {
        name: string
        count: number
        label?: string | number
    }[]
    filter: string
}) => {
    const [, setSearchParams] = useSearchParams({})
    const [showFilter, setshowFilter] = useState(false)
    const [enableScroll, setEnableScroll] = useState(false)
    useEffect(() => {
        if (showFilter) {
            const timer = setTimeout(() => {
                setEnableScroll(true)
            }, 300)
            return () => clearTimeout(timer)
        } else {
            setEnableScroll(false)
        }
    }, [showFilter])

    return (
        <div className="relative">
            <div
                className={`fixed z-[60] inset-0 bg-transparent    ${
                    showFilter ? 'block' : 'hidden'
                }`}
                onClick={() => {
                    setshowFilter(false)
                }}
            ></div>
            <button
                className="flex justify-between items-center"
                onClick={() => setshowFilter(!showFilter)}
            >
                <span className="pl-2 text-sm font-bold">{FilterName}</span>
                <MdKeyboardArrowDown
                    size={25}
                    className={`duration-300 ${
                        showFilter
                            ? 'rotate-180 text-red-500'
                            : 'text-slate-500 '
                    }`}
                />
            </button>

            <ul
                className={`absolute top-[100%] z-[70] -right-16 sm:right-0 min-w-[220px] flex flex-col duration-300  border origin-top ${
                    !showFilter
                        ? 'max-h-0 border-transparent bg-transparent'
                        : 'max-h-[280px] bg-white'
                } ${enableScroll ? 'overflow-y-auto' : 'overflow-hidden'}`}
            >
                {filters.map((filterData, index) => (
                    <li key={index}>
                        <button
                            className="relative text-start px-[24px] py-[16px] hover:bg-[#f4eddd] flex items-center gap-2 w-full"
                            onClick={() => {
                                setSearchParams(
                                    (prev) => {
                                        prev.set(filter, filterData.name)
                                        return prev
                                    },
                                    { replace: true }
                                )
                                setshowFilter(false)
                            }}
                        >
                            <span className="whitespace-nowrap">
                                {filterData.label || filterData.name}
                            </span>
                            <span className="text-slate-500">
                                ({filterData.count})
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterBy
