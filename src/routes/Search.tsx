import { useParams, useSearchParams } from 'react-router-dom'
import ProductsList from './ProductsList'
import { useEffect, useState } from 'react'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/FetchProducts'
import Filters from '../components/ProductsListPage/Filters'
import ProductsWithFilters from '../components/ProductsListPage/ProductsWithFilters'

const SearchPage = () => {
    return (
        <div>
            <ProductsWithFilters />
        </div>
    )
}

export default SearchPage
