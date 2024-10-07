import React from "react";
import { Link } from "react-router-dom";
import LeftSide from "../components/LoginLeftSide";
import Inputs from "../components/Inputs";

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
                    <Inputs/>
                  
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
                <LeftSide/>
            </div>
        </div>
    );
};

export default Login;
