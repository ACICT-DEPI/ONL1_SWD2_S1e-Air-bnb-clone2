import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
    const Link = ({ href, text }: { href: string; text: string }) => {
        return (
            <a
                href={href}
                className="text-sm border-b-2 border-transparent hover:border-black w-fit duration-150"
            >
                {text}
            </a>
        );
    };
    return (
        <div className="flex items-start flex-wrap bg-[#e4e4e4] justify-center p-4 sm:p-10 lg:px-32 lg:py-10 gap-52  mt-10">
            <div className="flex flex-col gap-5 w-[155px]">
                <h3>حول اتش آند ام</h3>
                <ul className="flex flex-col gap-2">
                    <Link href="#" text="معلومات عنا" />
                    <Link href="#" text="معلومات التوصيل" />
                    <Link href="#" text="شروط وأحكام الشراء" />
                    <Link href="#" text="شروط وأحكام الموقع" />
                    <Link href="#" text="سياسة الخصوصية" />
                    <Link href="#" text="الإرجاع والاستبدال" />
                    <Link href="#" text="الاستدامة" />
                </ul>
            </div>
            <div className="flex flex-col gap-5  w-[155px]">
                <h3>خدمة الزبائن</h3>
                <ul className="flex flex-col gap-2">
                    <Link href="#" text="الأسئلة المتكررة" />
                    <Link href="#" text="اتصل بنا" />
                    <Link href="#" text="التواصل عبر واتساب" />
                    <Link href="#" text="خريطة الموقع" />
                    <Link href="#" text="محلاتنا" />
                    <Link href="#" text="أثاث وإضاءة اتش آند ام هوم" />
                    <Link href="#" text="بطاقة الهدايا الإلكترونية" />
                </ul>
            </div>
            <div className="flex flex-col gap-5 w-[255px] xl:mr-auto">
                <h3>تواصل معنا</h3>
                <p>
                    كن أول المطلعين على التشكيلات الجديدة و العروض الحصرية
                    والفعاليات في المحلات القريبة منك
                </p>
                <div className="flex justify-between border-b-2 border-b-black">
                    <input
                        type="text"
                        placeholder="ادخل بريدك الالكتروني"
                        className="bg-transparent outline-none placeholder:text-black"
                    />
                    <button className="bg-black text-white p-2">
                        سجل الان
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center text-xs gap-2">
                <h3 className="font-bold">خدمة العملاء</h3>
                <p>مصر 24803822-02</p>
                <p>
                    أوقات العمل أيام السبت إلى الخميس من الساعة 9 صباحاً إلى 10
                    مساءً و أيام الجمعة من الساعة 1 مساءً إلى 10 مساءً. (بتوقيت
                    مصر)
                </p>
                <div className=" flex">
                    <img
                        src="https://eg.hm.com/themes/custom/transac/alshaya_hnm/h-m-logo-bw.svg?1594516899"
                        alt=""
                    />
                </div>
                <div className="flex gap-10">
                    <a href="#">
                        <FaSquareFacebook size={25} />
                    </a>
                    <a href="#">
                        <BsTwitterX size={25} />
                    </a>
                    <a href="#">
                        <IoLogoInstagram size={25} />
                    </a>
                </div>
                <p className="lg:w-[560px] text-center">
                    مفهوم الأعمال لدى H&M هو تقديم أحدث صيحات الموضة والجودة
                    العالية بأفضل الأسعار. ومنذ تأسيس H&M في عام 1947 نمت لتصبح
                    واحدة من شركات الأزياء الرائدة في العالم. حقوق النشر محفوظة
                    لموقع شركة H&M و هو مُلك Hennes H&M & Mauritz AB ©
                </p>
                <p>مصر</p>
            </div>
        </div>
    );
};

export default Footer;
