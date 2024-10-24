import React, { useEffect, useState } from 'react'
import YouMayLike from '../components/ProductDetails/YouMayLike'
import ProductGallery from '../components/ProductDetails/ProductGallery'
import SideBar from '../components/ProductDetails/SideBar'
import Recommendations from '../components/ProductDetails/Recommendations'
import More from '../components/ProductDetails/More'
import { useLocation, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
const Product = () => {
    const { id } = useParams()
    const { pathname } = useLocation()
    const [product, setProduct] = useState()
    const [Isloading, setIsloading] = useState(true)

    useEffect(() => {
        const GetProductData = async () => {
            try {
                const response = await fetch(
                    `https://h-m-server.vercel.app/api/products/${id}`
                )
                const data = await response.json()
                setProduct(data.data)
                setIsloading(false)
            } catch (error) {
                setIsloading(false)
                console.log(error)
            }
        }
        GetProductData()
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    if (!Isloading && !product)
        return (
            <div className="xl:max-w-5xl mx-auto">
                <div className="text-2xl font-bold text-center my-6">
                    عذراً، لم يتم العثور على الصفحة التي تبحث عنها.
                </div>
                <div className="text-2xl font-bold text-center my-6">
                    لكن لدينا الكثير من المنتجات المختارة بعناية والتي
                    ستعشقونها.
                </div>
                <Carousel />
            </div>
        )
    return (
        <>
            {Isloading || !product ? (
                <ProductDetailsSkeleton />
            ) : (
                <ProductDetails product={product} />
            )}
            <div className="w-50 flex items-center justify-center">
                <YouMayLike />
            </div>
            <div className="w-50 flex items-center justify-center mt-7">
                <Recommendations />
            </div>
            <div className="w-50 flex flex-col items-center justify-center mt-7">
                <More />
            </div>
        </>
    )
}

export default Product

const ProductDetails = ({
    product,
}: {
    product: {
        title: string
        description: string
        images: string[]
        price: number
        id: string
        color: string
        size: string
        colors: string[]
    }
}) => {
    return (
        <div className="product-MainContainer h-full flex flex-col lg:flex-row  mt-16  m-8 sm:flex-col animate-slideUp relative">
            <ProductGallery
                images={product.images}
                description={product.description}
                id={product.id}
            />
            <SideBar
                title={product.title}
                price={product.price}
                colors={product.colors}
                image={product.images}
                id={product.id}
                color={product.color}
                size={product.size}
            />
        </div>
    )
}

const ProductDetailsSkeleton = () => {
    return (
        <div className="product-MainContainer h-full flex flex-col lg:flex-row  mt-16  m-8 sm:flex-col animate-slideUp relative">
            <div className="gallery-container w-2/3 flex flex-col gap-3">
                <div className="details-Gallery flex lg:flex-row sm:flex-col gap-3">
                    <div className="w-full h-[670px] bg-gray-200 animate-pulse"></div>
                    <div className="w-full h-[670px] bg-gray-200 animate-pulse"></div>
                </div>

                <div className="details-box bg-white p-16 w-full">
                    <div className="h-6 bg-gray-200 animate-pulse mb-3"></div>
                    <div className="h-6 bg-gray-200 animate-pulse mb-3"></div>
                    <div className="h-6 bg-gray-200 animate-pulse mb-3"></div>

                    <div className="h-4 w-1/3 bg-gray-200 animate-pulse mb-6"></div>

                    <div className="h-10 w-1/4 bg-gray-200 animate-pulse"></div>
                </div>

                <div className="details-Gallery flex lg:flex-row sm:flex-col gap-4">
                    <div className="w-full h-[670px] bg-gray-200 animate-pulse"></div>
                    <div className="w-full h-[670px] bg-gray-200 animate-pulse"></div>
                </div>
            </div>

            <div className="product-sideBar w-3/3 h-fit sticky top-0 pr-5 flex lg:flex-col flex-row flex-wrap lg:w-1/3 sm:gap-20 lg:gap-0">
                <div className="animate-pulse flex flex-col gap-4 w-full">
                    <div className="bg-gray-300 h-6 w-1/2 mb-4"></div>
                    <div className="bg-gray-300 h-8 w-1/4 mb-4"></div>
                    <div className="bg-gray-200 h-4 w-3/4 mb-3"></div>
                    <div className="bg-gray-200 h-6 w-full mb-4"></div>
                    <div className="bg-gray-200 h-12 w-full mb-6"></div>
                    <div className="bg-gray-200 h-16 w-full mb-6"></div>
                    <div className="bg-gray-200 h-4 w-3/4 mb-3"></div>
                </div>
            </div>
        </div>
    )
}