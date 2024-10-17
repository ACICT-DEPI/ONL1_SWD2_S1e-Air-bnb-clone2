import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { getProducts } from '../../api/FetchProducts'
import Filters from './filters/Filters'
import SelectedFilters from './filters/SelectedFilters'
import React from 'react'
import ProductsSkeleton from './ProductsSkeleton'
import ProductsContainer from './ProductsContainer'
import Carousel from '../Carousel'

const ProductsWithFilters = () => {
    const params = useParams()

    const [searchParams] = useSearchParams()
    const name = searchParams.get('query')
    const price = searchParams.get('price')
    const color = searchParams.get('color')
    const size = searchParams.get('size')
    const category = searchParams.get('category')

    const { data, error, isLoading } = useQuery({
        queryKey: ['products', params.shop, name, price, color, size, category],
        queryFn: () =>
            getProducts({
                name: name || undefined,
                price: price || undefined,
                category: params.shop ? params.shop : category || undefined,
                color: color || undefined,
                size: size || undefined,
            }),
    })

    if (data && data.length === 0) {
        return (
            <div className="flex items-center justify-center flex-col xl:max-w-5xl mx-auto ">
                <div className="text-xl font-bold my-5">
                    لم نتمكن من العثور على ما تبحث عنه
                </div>
                <div className="text-3xl font-bold my-5">
                    جرب استخدام كلمات بحث أوسع أو تعرف على أفضل المنتجات لدينا
                </div>
                <Carousel />
            </div>
        )
    }
    return (
        <>
            <Filters products={data || []} />
            {(price || color || size || category) && <SelectedFilters />}
            {isLoading ? (
                <ProductsSkeleton />
            ) : (
                <ProductsContainer products={data || []} />
            )}
        </>
    )
}

export default ProductsWithFilters
