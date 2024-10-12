import React from "react";

const Cover = (
    {
        img,
        smallImg,
        text,
        linkText,
        link,
        header,
    }: {
        img: string;
        smallImg?: string;
        text: string;
        linkText: string;
        link: string;
        header: string;
    } = {
        img: "https://cdn-eu.dynamicyield.com/api/9876644/images/4ffaed093fe0__fnp-ws50e-ns-3x2-1.webp",
        text: "",
        linkText: "",
        link: "",
        header: "قم باضافة النصوص لتظهر هنا",
    }
) => {
    return (
        <div className="w-full xl:h-[685px] relative text-white">
            <img src={img} alt="" className="w-full h-full hidden md:block" />
            <img
                src={smallImg ? smallImg : img}
                alt=""
                className="w-full h-full md:hidden"
            />
            <div className="flex w-full flex-col items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-black/0 to-black/60 to-90%  ">
                <p className="text-3xl lg:text-5xl">{header}</p>
                <p className="text-lg lg:text-xl text-center">{text} </p>
                <a href={link} className="bg-white text-black px-3 py-1 my-5">
                    {linkText}
                </a>
            </div>
        </div>
    );
};

export default Cover;
