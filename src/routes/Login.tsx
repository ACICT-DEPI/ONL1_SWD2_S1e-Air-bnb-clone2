import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="md:w-[70%]  mx-auto grid grid-cols-1  pt-9 w-full px-4">
            <div className="w-[100%]  flex md:justify-start font-hm-sans-arabic  border-b  border-gray-300 justify-center">
                <p className="text-xl pb-3">
                    <b>تسجيل الدخول</b>
                </p>
            </div>
            <div className="w-[100%] md:grid md:grid-cols-2  divide-gray-400 mt-11">
                <div className="w-[100%]  flex flex-col  font-hm-sans-arabic gap-11  lg:border-l border-gray-300">
                    <p className="md:text-xl invisible md:visible">
                        <b>تسجيل الدخول عن طريق البريد الالكتروني</b>
                    </p>
                    <form className="flex flex-col  gap-11 lg:pl-20 " action="">
                        <div className="w-[100%] border-b border-black pb-2 relative">
                            <input
                                type="text"
                                name="email"
                                id=""
                                placeholder=" "
                                className="outline-none bg-transparent w-full z-50  relative peer"
                            />
                            <label
                                htmlFor="email"
                                className="text-black absolute right-0 h-full z-10 duration-300 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 "
                            >
                                البريد الالكتروني
                            </label>
                        </div>
                        <div className="w-[100%] border-b border-black pb-2 relative">
                            <input
                                type="password"
                                name="password"
                                id=""
                                placeholder=" "
                                className="outline-none bg-transparent w-full z-50  relative peer"
                            />
                            <label
                                htmlFor="password"
                                className="text-black absolute right-0 h-full z-10 duration-300 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 "
                            >
                                كلمة السر
                            </label>
                        </div>
                    </form>
                    <div className="flex md:flex-row  align-middle md:gap-11 w flex-col">
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 text-sm  w-full md:w-[40%] h-11  hover:opacity-50 transition-opacity duration-200 "
                        >
                            تسجيل الدخول
                        </button>
                        <Link
                            to="#"
                            className=" flex flex-row md:justify-normal justify-center ml-4 text-sm pt-4   text-zinc-700 w-full  hover:underline transition-all duration-200  "
                        >
                            هل نسيت كلمه السر؟
                        </Link>
                    </div>
                </div>
                <div className="w-[100%]  flex flex-col  font-hm-sans-arabic items-start md:gap-7 md:pr-28 gap-3 mb-20">
                    <p className="text-xl invisible md:visible ">
                        <b>سجل الآن عن طريق برامج التواصل الاجتماعي</b>
                    </p>
                    <div className="md:w-0 md:h-0 w-[100%] flex items-center justify-center md:hidden">
                        <hr className="  border-zinc-700 w-[48%] flex  " />
                        <span className=" text-black font-semibold flex items-center text-xl justify-center">
                            OR
                        </span>
                        <hr className=" border-gray-500 w-[48%]" />
                    </div>

                    <div className="md:w-auto flex flex-col w-full ">
                        <button
                            className="flex justify-center  gap-5 p-3 border border-slate-700 h-12  text-xs text-zinc-700 md:mt-0 mt-3 "
                            type="submit"
                        >
                            <ImFacebook2 className="flex  flex-col align-text-bottom text-2xl  text-sky-700  " />
                            <span className="pt-1">
                                سجل دخول عن طريف الفيس بوك
                            </span>
                        </button>
                    </div>
                    <div className="md:w-auto flex flex-col w-full">
                        <button
                            className="flex justify-center items-center  p-2 border border-slate-700 h-12 text-xs text-zinc-700"
                            type="submit"
                        >
                            <div className="">
                                <img
                                    className="w-[70%]"
                                    src="./icons8-google-48.png"
                                    alt="Google Icon"
                                />
                            </div>
                            <span className="pt-1">
                                سجل الدخول عن طريق جوجل
                            </span>
                        </button>
                    </div>

                    <div className="md:w-auto flex flex-col w-full  ">
                        <p className="text-xs pb-2  text-zinc-700 flex md:flex-auto justify-center">
                            ليس لديك حساب؟
                        </p>
                        <Link
                            to="/register"
                            className="  flex justify-center  gap-5 p-3 border border-slate-700 h-12  text-xs text-zinc-700 hover:opacity-50 transition-opacity duration-200"
                        >
                            <SlUser className="flex   font-hm-sans-arabic flex-col align-text-bottom text-xl  " />
                            <span className="pt-1">سجل هنا</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
