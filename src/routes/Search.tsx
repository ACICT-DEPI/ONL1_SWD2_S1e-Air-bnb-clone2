import React, { useEffect } from 'react'
import ProductsWithFilters from '../components/ProductsListPage/ProductsWithFilters'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getProducts } from '../api/FetchProducts'
import { useQuery } from '@tanstack/react-query'
import { Check } from 'lucide-react'

const SearchPage = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="flex flex-col animate-slideUp relative">
            <div className="w-full text-center text-2xl font-bold my-5">
                نتائج البحث
            </div>
            <div className="flex">
                <div className="hidden sm:block">
                    <ByCategory />
                </div>
                <div>
                    <ProductsWithFilters />
                </div>
            </div>
        </div>
    )
}

export default SearchPage
const ByCategory = () => {
    const [searchParams] = useSearchParams()
    const name = searchParams.get('query')
    const price = searchParams.get('price')
    const color = searchParams.get('color')
    const size = searchParams.get('size')
    const category = searchParams.get('category')

    const { data, isLoading } = useQuery({
        queryKey: ['products', name, price, color, size],
        queryFn: () =>
            getProducts({
                name: name || undefined,
                price: price || undefined,
                color: color || undefined,
                size: size || undefined,
            }),
    })

    const [, setSearchParams] = useSearchParams({})

    const categoryCounts = (data || []).reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1
        return acc
    }, {})
    const categoryCountArray = Object.entries(categoryCounts).map(
        ([category, count]) => ({
            name: category,
            label: category,
            count: Number(count),
        })
    )
    categoryCountArray.forEach((category) => {
        if (category.name === 'kids') {
            category.label = 'الاطفال'
        }
        if (category.name === 'women') {
            category.label = 'النساء'
        }
        if (category.name === 'men') {
            category.label = 'الرجال'
        }
        if (category.name === 'baby') {
            category.label = 'الرضع'
        }
        if (category.name === 'home') {
            category.label = 'اتش اند ام هوم'
        }
        if (category.name === 'sports') {
            category.label = 'الملابس الرياضية'
        }
    })
    if (data && data.length === 0) {
        return (
            <div className="min-w-[235px] w-[235px] h-[300px]  flex flex-col"></div>
        )
    }

    return (
        <aside className="flex flex-col min-w-[235px] p-5  font-light text-gray-800">
            <button className="text-start font-bold text-red-500">
                التصنيف
            </button>
            {isLoading ? (
                <div className="w-full h-[300px]  flex flex-col">
                    <div className="w-full h-[40px] animate-pulse bg-gray-200 my-2"></div>
                    <div className="w-full h-[40px] animate-pulse bg-gray-200 my-2"></div>
                    <div className="w-full h-[40px] animate-pulse bg-gray-200 my-2"></div>
                    <div className="w-full h-[40px] animate-pulse bg-gray-200 my-2"></div>
                </div>
            ) : (
                <ul>
                    <li className="flex justify-between items-center py-2">
                        <button
                            className="flex justify-between items-center py-2 w-full"
                            onClick={() => {
                                setSearchParams(
                                    (prev) => {
                                        prev.delete('category')
                                        return prev
                                    },
                                    { replace: true }
                                )
                            }}
                        >
                            <span className="font-semibold flex">
                                الجميع
                                {!category && (
                                    <div className="flex  items-center justify-center pr-2">
                                        <Check size={16} />
                                    </div>
                                )}
                            </span>

                            <span className="text-sm">({data?.length})</span>
                        </button>
                    </li>
                    {categoryCountArray.map((filterData, index) => (
                        <li key={index}>
                            <button
                                className="flex justify-between items-center py-2 w-full"
                                onClick={() => {
                                    setSearchParams(
                                        (prev) => {
                                            prev.set(
                                                'category',
                                                filterData.name
                                            )
                                            return prev
                                        },
                                        { replace: true }
                                    )
                                }}
                            >
                                <span className="font-semibold flex">
                                    {filterData.label}
                                    {filterData.name === category && (
                                        <div className="flex  items-center justify-center pr-2">
                                            <Check size={16} />
                                        </div>
                                    )}
                                </span>

                                <span className="text-sm">
                                    ({filterData.count})
                                </span>
                            </button>
                        </li>
                    ))}
                    {categoryCountArray.map((category) => (
                        <li
                            key={category.name}
                            className="flex justify-between items-center py-2 "
                        ></li>
                    ))}
                </ul>
            )}
        </aside>
    )
}
