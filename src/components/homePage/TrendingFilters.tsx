import React, { useState } from 'react'

const TrendingFilters = ({
    setFilter,
    filter,
}: {
    setFilter: any
    filter: any
}) => {
    const Filters = [
        { name: 'women', label: 'النساء' },
        { name: 'kids', label: 'الاطفال' },
        { name: 'men', label: 'الرجال' },
    ]
    const Filter = ({ label, name }: { label: string; name: string }) => {
        return (
            <button
                className={`text-base duration-1000 transition-all rounded-full border px-3 py-1 
                ${
                    filter.name === name
                        ? 'bg-[#e50010] text-white border-transparent'
                        : 'border-black bg-white text-black'
                }`}
                onClick={() =>
                    setFilter({
                        name: name,
                        label: label,
                    })
                }
            >
                {label}
            </button>
        )
    }
    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            {Filters.map((filter, index) => (
                <Filter label={filter.label} name={filter.name} key={index} />
            ))}
        </div>
    )
}

export default TrendingFilters
