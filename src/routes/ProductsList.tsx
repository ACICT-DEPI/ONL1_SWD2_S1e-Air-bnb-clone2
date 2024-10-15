import React, { useEffect, useState } from 'react'
import SideBar from '../components/ProductsListPage/SideBar'
import ProductsNaviagtion from '../components/ProductsListPage/ProductsNaviagtion'
import ProductsWithFilters from '../components/ProductsListPage/ProductsWithFilters'
import { useParams } from 'react-router-dom'

const ProductsList = () => {
    const { shop } = useParams()
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
