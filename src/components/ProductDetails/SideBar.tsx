import React from "react";
const SideBar = () => {

    return <>
        <div className="product-sideBar w-1/3 h-56  sticky top-0 pr-5">
            <div className="product-title text-xl mb-4 mt-3">تي-شيرت بقصّة ضيقة</div>
            <div className="product-price">649.00 ج.م</div>
            <div className="text-gray-500 text-sm">تتضمن ضريبة القيمة المضافة </div>
            <div className="express-delivery-text border border-green-300 w-fit px-7 py-1 mt-3   flex gap-3">
                <img src="https://eg.hm.com/themes/custom/transac/alshaya_white_label/imgs/icons/same-day-delivery.svg" alt="" />
                <div className="text-sm font-light">التوصيل في نفس اليوم متاح</div>
            </div>
        </div>
    </>
}
export default SideBar