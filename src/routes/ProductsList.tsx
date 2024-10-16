import React, { useEffect, useState } from 'react'
import SideBar from '../components/ProductsListPage/SideBar'
import ProductsNaviagtion from '../components/ProductsListPage/ProductsNaviagtion'
import ProductsWithFilters from '../components/ProductsListPage/ProductsWithFilters'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/FetchProducts'

const ProductsList = () => {
    const { shop } = useParams()

    const [searchParams] = useSearchParams()
    const name = searchParams.get('query')
    const price = searchParams.get('price')
    const color = searchParams.get('color')
    const size = searchParams.get('size')
    const category = searchParams.get('category')

    const { data, error, isLoading } = useQuery({
        queryKey: ['products', shop, name, price, color, size, category],
        queryFn: () =>
            getProducts({
                name: name || undefined,
                price: price || undefined,
                category: shop ? shop : category || undefined,
                color: color || undefined,
                size: size || undefined,
            }),
    })
    return (
        <div className="flex flex-col px-6">
            <ProductsNaviagtion />
            <div className="flex justify-between mt-5">
                <SideBar />
                <main className="flex flex-col flex-1">
                    <h1 className="sm:text-5xl text-3xl text-center sm:text-start mb-8">
                        {shop === 'kids'
                            ? 'الاطفال'
                            : shop === 'men'
                            ? 'الرجال'
                            : shop === 'women'
                            ? 'النساء'
                            : shop}
                    </h1>
                    <ProductsWithFilters />
                </main>
            </div>
        </div>
    )
}

export default ProductsList
