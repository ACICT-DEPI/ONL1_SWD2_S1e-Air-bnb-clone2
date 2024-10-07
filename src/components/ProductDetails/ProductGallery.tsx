import React from "react"
import GalleryImg from "./GalleryImg"
const ProductGallery = () => {
    return <>
        <div className="gallery-container w-2/3 flex flex-col gap-3">
            <div className="details-Gallery flex lg:flex-row sm:flex-col gap-3">
                <GalleryImg
                    src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:4d7cf004-02f0-48d5-b1a1-0ceaba4e4729/as/EID-9e1fe34d96f1ae888f43bb80e613776419175970.jpg?width=420&height=630&preferwebp=true"
                    alt="Image description"
                    placeholder="src\components\ProductDetails\placeHolder.jfif"
                    className="w-full h-full object-cover"
                />

                <img src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:fb2cd5de-6683-4da2-9285-4a9fbbc2a185/as/EID-52bb7990fc09afa836dd50cd2d12917cc315742b.jpg?width=420&height=630&preferwebp=true" alt="" />
            </div>
            <div className="details-box bg-white p-16 w-full">
                <div className="describtion">استمتع بإطلالة أنيقة مع هذا التيشيرت القصير بتصميم محدد للقوام، والذي يأتي لكم مصنوعاً من الجيرسيه الناعم مع حافة ضيقة حول الياقة وحافّة سفلية مستقيمة.</div>
                <div className="piece-no pt-9">رقم القطعة : 1210630036</div>
                <button className="pt-6">تفاصيل المنتج</button>
            </div>
            <div className="details-Gallery flex flex-col lg:flex-row sm:flex-col gap-4">
                <img src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:0aceda39-4f25-4974-8e88-2f5771cd6261/as/EID-817e84d04a9b2b2b009f17e65f78a73233ed5dc1.jpg?width=420&height=630&preferwebp=true" alt="" />
                <img src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:8ff2e4dd-eb00-49d2-8511-bc3181e7dcaf/as/EID-6dd85472265a9cb2857fa890385a95b048276238.jpg?width=420&height=630&preferwebp=true" alt="" />
            </div>
        </div>
    </>
}
export default ProductGallery