import React from 'react';
import SideLists from './SideListsComponent';
import ProductsWithFilters from '../components/ProductsListPage/ProductsWithFilters';
import ProductsNaviagtion from '../components/ProductsListPage/ProductsNaviagtion';
import { useParams, useSearchParams } from 'react-router-dom';

interface ProductsListProps {
    defaultCategory: string;
    headerTitle?: string;
}

const ProductsList: React.FC<ProductsListProps> = ({
    defaultCategory,
    headerTitle,
}) => {
    const { shop } = useParams();
    const [searchParams] = useSearchParams();

    const name = searchParams.get('query');
    const price = searchParams.get('price');
    const color = searchParams.get('color');
    const size = searchParams.get('size');
    const category = searchParams.get('category');

    const activeCategory = shop || category || defaultCategory;

    return (
        <div className="flex flex-col px-6 animate-slideUp relative">
            <ProductsNaviagtion />
            <div className="flex justify-between mt-5">
                <SideLists />
                <main className="flex flex-col flex-1">
                    <h1 className="sm:text-5xl text-3xl text-center sm:text-start mb-8">
                        {headerTitle || activeCategory}
                    </h1>
                    {/* Pass activeCategory to ProductsWithFilters */}
                    <ProductsWithFilters activeCategory={activeCategory} />
                </main>
            </div>
        </div>
    )
}

export default ProductsList;
