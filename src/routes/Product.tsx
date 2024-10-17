import React, { useEffect, useState } from 'react'
import YouMayLike from '../components/ProductDetails/YouMayLike'
import ProductGallery from '../components/ProductDetails/ProductGallery'
import SideBar from '../components/ProductDetails/SideBar'
import Recommendations from '../components/ProductDetails/Recommendations'
import More from '../components/ProductDetails/More'
import { useLocation, useParams } from 'react-router-dom'
const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://h-m-server.vercel.app/api/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            }
            )
            .then((data) => {
                setProduct(data.data)
                setError(null);
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to fetch product details. Please try again later.');
            });
    }, [id])
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    if (error) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-red-500">{error}</p> {/* Display error message */}
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex items-center justify-center h-full">
                <p>هذا المنتج غير متاح الان. حاول في وقت لاحق!</p> 
            </div>
        );
    }
    return (
        <>
            <div className="product-MainContainer h-full flex flex-col lg:flex-row  mt-16  m-8 sm:flex-col animate-slideUp relative">
                <ProductGallery
                    images={product.images}
                    description={product.description}
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
