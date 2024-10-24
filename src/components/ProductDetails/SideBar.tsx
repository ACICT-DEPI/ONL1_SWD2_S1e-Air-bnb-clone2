import React, { useEffect, useState } from "react";
import { ShoppingBag, Heart } from "lucide-react";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ColorSelector from "./ColorSelector";
import Sizes from "./Sizes";
import Share from "./Share";
import useCart from '../../utils/zustand/UseCart'
import Product from "../../routes/Product";
import Toast from "./Toast";
const SideBar = (props) => {
    const addToCart = useCart((state) => state.addToCart)

    const [visits, setVisits] = useState(Math.floor(Math.random() * (30 - 5 + 1)) + 5);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [toastMessage, setToastMessage] = useState('');
    const { cart } = useCart()
    const [isShareOpen, setIsShareOpen] = useState(false);

    const openShare = () => {
        setIsShareOpen(true);
    };

    const closeShare = () => {
        setIsShareOpen(false);
    };
    const handleAddToCart = () => {
        const existingProduct = cart.items.find(
            (item) => item.productID === props.id && item.color === selectedColor && item.size === selectedSize
        );

        if (existingProduct) {
            setToastMessage('القطعة موجودة بالفعل في الحقيبة!');
            setTimeout(() => {
                setToastMessage('');
            }, 3000);
        } else {
            const product = {
                productID: props.id,
                title: props.title,
                image: props.image[0],
                price: props.price,
                category: props.category,
                color: selectedColor,
                size: selectedSize,
                quantity: 1,
                amount: props.price,
            };
            addToCart(product);
            setToastMessage('تم إضافة القطعة الى الحقيبة !');
            setTimeout(() => {
                setToastMessage('');
            }, 3000);
        }
    };
    return (
        <>
            <div className="product-sideBar w-3/3 h-fit sticky top-0 pr-5 flex lg:flex-col flex-row flex-wrap lg:w-1/3 sm:gap-20 lg:gap-0">
                <>
                    <div className="sec1">
                        <div className="product-title text-xl mb-4 mt-3">{props.title}</div>
                        <div className="product-price">{props.price} ج.م</div>
                        <div className="text-gray-500 text-sm">تتضمن ضريبة القيمة المضافة</div>
                        <div className="express-delivery-text border border-green-300 w-fit px-7 py-1 mt-3 flex gap-3">
                            <img
                                src="https://eg.hm.com/themes/custom/transac/alshaya_white_label/imgs/icons/same-day-delivery.svg"
                                alt="Same day delivery"
                            />
                            <div className="text-sm font-light">التوصيل في نفس اليوم متاح</div>
                        </div>
                        <div className="underline underline-offset-4 text-sm mt-5">كتابة مراجعة</div>
                    </div>
                    <div className="sec2">
                        <ColorSelector colors={props.colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} defaultcolor={props.color} />
                        <Sizes
                            selectedSize={selectedSize}
                            defaultSize={props.size}
                            setSelectedSize={setSelectedSize}
                        />
                        <div className="flex flex-row items-center">
                            <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-16 border border-black mt-5 transition-all flex flex-row gap-3"
                                onClick={() => handleAddToCart()}
                            >
                                <ShoppingBag size={20} /> أضف الى الحقيبة
                            </button>
                            <Toast
                                message={toastMessage}
                            />
                            <div className="share flex flex-row items-center mr-4 mt-6 hover:cursor-pointer" onClick={openShare}>
                                <RiShareForwardLine size={30} />
                                <div>شارك</div>
                            </div>
                            {isShareOpen && <Share closeShare={closeShare} />}
                        </div>
                        <button className="bg-transparent hover:bg-gray-600 text-black font-bold py-2 px-16 border border-black mt-5 transition-all flex flex-row gap-3 hover:text-white w-fit">
                            <Heart size={20} /> أضف الى المنتجات المفضلة
                        </button>
                        <div className="vists flex flex-row items-center mt-5 gap-2">
                            <MdOutlineRemoveRedEye size={23} color="#CD2026" />
                            تم مشاهدة هذا المنتج {visits} مرة اليوم.
                        </div>
                        <div className="flex flex-row items-center gap-3 mt-4">
                            <img src="https://eg.hm.com/themes/custom/transac/alshaya_white_label/imgs/icons/style-icons-ui-return.svg" alt="Return policy" />
                            <div>خدمة الإرجاع المجاني أونلاين متوفرة حتى 14 يوماً</div>
                        </div>
                    </div>
                </>

            </div>
        </>
    );
};

export default SideBar;