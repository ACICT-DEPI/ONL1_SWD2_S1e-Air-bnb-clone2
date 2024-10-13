import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { getProducts } from '../../api/FetchProducts'
import Filters from './Filters'
import SelectedFilters from './SelectedFilters'
import ProductsWithLoading from './ProductsWithLoading'
import React from 'react'

const ProductsWithFilters = () => {
    const params = useParams()

    const [searchParams] = useSearchParams()
    const name = searchParams.get('query')
    const price = searchParams.get('price')
    const color = searchParams.get('color')
    const size = searchParams.get('size')

    const { data, error, isLoading } = useQuery({
        queryKey: ['products', params.shop, name, price, color, size],
        queryFn: () =>
            getProducts({
                name: name || undefined,
                price: price || undefined,
                category: params.shop,
                color: color || undefined,
                size: size || undefined,
            }),
    })
    console.log(data)

    return (
        <>
            <Filters products={data || []} />
            {(price || color || size) && <SelectedFilters />}
            <ProductsWithLoading products={data} loading={isLoading} />
        </>
    )
}

export default ProductsWithFilters