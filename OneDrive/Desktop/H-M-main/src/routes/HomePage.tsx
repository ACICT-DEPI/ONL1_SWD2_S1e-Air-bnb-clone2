import React from "react";
import RecommendationList from "../components/homePage/RecommendationList";
import Discount from "../components/homePage/Discount";
import Cover from "../components/homePage/Cover";
import TrendingNow from "../components/homePage/TrendingNow";
import WeChoosed from "../components/homePage/WeChoosed";

const HomePage = () => {
    return (
        <div className="container overflow-hidden xl:max-w-5xl  mx-auto flex flex-col gap-4 px-5 xl:px-0">
            <RecommendationList />
            <Discount />
            <Cover
                header="خياطة عصرية"
                img="https://cdn-eu.dynamicyield.com/api/9876644/images/4ffaed093fe0__fnp-ws50e-ns-3x2-1.webp"
                smallImg="https://cdn-eu.dynamicyield.com/api/9876644/images/47e437275515__fnp-ws50e-ns-1x1-1.webp"
                text="تصاميم انيقة باللون الرمادي والازرق والبني"
                link="#"
                linkText="تسوقي هنا"
            />
            <TrendingNow />
            <WeChoosed />
            <Cover
                header="جاكيتات ومعاطف"
                img="https://cdn-eu.dynamicyield.com/api/9876644/images/32a0e9ac8d8da__ms50ee-outdoor-apparel-3x2.webp"
                smallImg="https://cdn-eu.dynamicyield.com/api/9876644/images/55f60fcca9d9__ms50ee-outdoor-apparel-1x1.webp"
                text="اكتشف أساسيات خزانة الملابس الراقية لموسم الخريف."
                link="#"
                linkText="تسوق الان"
            />
            <Cover
                header="أطقم ناعمة للأطفال"
                img="https://cdn-eu.dynamicyield.com/api/9876644/images/1073636bd314e__tck-baby-new-3x2.webp"
                smallImg="https://cdn-eu.dynamicyield.com/api/9876644/images/ee0ca1e58dae__tck-baby-new-1x1.webp"
                text="مصممة لتمنحهم الراحة والنعومة والدفء."
                link="#"
                linkText="تسوقوا الآن"
            />
            <Cover
                header="دليل العطور المنزلية"
                img="https://cdn-eu.dynamicyield.com/api/9876644/images/c3699f51c68a__7139b-3x2-room-fragrances-scent-guide-floral-fresh-fruity-spicy-woody.webp"
                smallImg="https://cdn-eu.dynamicyield.com/api/9876644/images/23c5ad034a0b9__7139b-1x1-room-fragrances-scent-guide-floral-fresh-fruity-spicy-woody.webp"
                text="احصل على العطر المناسب لمنزلك."
                link="#"
                linkText="تسوق الآن"
            />
        </div>
    );
};

export default HomePage;
