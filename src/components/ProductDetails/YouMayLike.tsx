import React from "react";
import Carousel from "../Carousel";

const YouMayLike = () => {
    const prodcuts = [
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://eg.hm.com/assets/styles/HNM/19690553/d835a589fd0023048b12c4441449f3b9efc69eb9/1/image-thumb__8481573__product_listing/d835a589fd0023048b12c4441449f3b9efc69eb9.jpg",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://eg.hm.com/assets/styles/HNM/20222311/cc7c80690e8d760a5fdbf9656d2b455a152cd09d/1/image-thumb__9385850__product_listing/cc7c80690e8d760a5fdbf9656d2b455a152cd09d.jpg",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:bfbcde70-9188-4ca3-9d93-ff3a5b27cf6b/as/EID-17ddaaf62c74fa370cdb0173327dfd34b61299fd.jpg?width=450&height=675&preferwebp=true",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://eg.hm.com/assets/styles/HNM/19490805/bd03c489da7adc0123d1d04afa24fabc056842d0/2/image-thumb__8389841__product_listing/16cb1ca0c1077b298cd30851a681705f11ef6b7c.jpg",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://eg.hm.com/assets/styles/HNM/19879845/b9c5e33d8eca392e70d9a6cd620d8111a4662961/1/image-thumb__8541777__product_listing/b9c5e33d8eca392e70d9a6cd620d8111a4662961.jpg",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:9904bdc7-9fa6-4a0c-bbb9-c8942d110628/as/EID-a50e2fa8ea43e17e5458ddddf78f8e84bfc317c9.jpg?width=450&height=675&preferwebp=true",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://eg.hm.com/assets/styles/HNM/19686860/9f8b7e2d0a22c7695a2fb3969ab91db1b4a6628b/2/image-thumb__8474282__product_listing/77be343820fa13944986d1b0063743afb929d849.jpg",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://eg.hm.com/assets/styles/HNM/20227275/6bdbc8752dfca6971bf80178d84f0ec35f78b973/1/image-thumb__9392909__product_listing/6bdbc8752dfca6971bf80178d84f0ec35f78b973.jpg",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:a6631108-16ce-4d2a-ab27-e25e02415d20/as/EID-8ea176fb5fe40c4fe6573aaf88f92568ecf9be7c.jpg?width=450&height=675&preferwebp=true",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:09033efb-2177-4980-a445-59a559095c07/as/EID-b6bb1590cd5db58bdd0c942a099511e7965cc5f6.jpg?width=450&height=675&preferwebp=true",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://eg.hm.com/assets/styles/HNM/19991089/90dbb8babb95797c4348665b229150f9a070c20a/2/image-thumb__8586191__product_listing/aded4d6a80321b9de3d0f3a3c9e4d01123c8943e.jpg",
            price: 799,
        },
        {
            id: "",
            name: "كنزة بقبة مستديرة",
            image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:2751c94a-0d5b-4cf3-b8fc-c28051dd81f8/as/EID-ad4bb26a823437ce6ba082d43a2fa2e421cbc7ce.jpg?width=450&height=675&preferwebp=true",
            price: 799,
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center my-5 gap-5 relative">
            <p className="text-3xl">قد يعجبك أيضاً</p>
            <Carousel prodcuts={prodcuts} />
        </div>
    );
};

export default YouMayLike;