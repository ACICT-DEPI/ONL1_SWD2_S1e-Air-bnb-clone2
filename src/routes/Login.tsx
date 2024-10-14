import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import LeftSide from "../components/LoginLeftSide";
import Inputs from "../components/Inputs";

const Login = () => {
    const [formLoginData, setFormLoginData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

   
    const handleChange = (e) => {
        setFormLoginData({ ...formLoginData, [e.target.name]: e.target.value });
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(
                'https://h-m-server.vercel.app/api/user/login', 
                {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formLoginData), 
                }
            );
    
            const result = await response.json();
    
           
            if (response.ok) {
                localStorage.setItem('token', result.token);
                localStorage.setItem('email', formLoginData.email);
                navigate("/ProfilePage"); 
                // console.log('User Logged In:', result);
            } else {
                alert('فشل في تسجيل الدخول: ' + result.message);
            }
        } catch (err) {
            console.error('Login Error:', err);
            alert('حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.');
        }
    };
    

    return (
        <div className="md:w-[70%] mx-auto grid grid-cols-1 pt-9 w-full px-4">
            <div className="w-[100%] flex md:justify-start font-hm-sans-arabic border-b border-gray-300 justify-center">
                <p className="text-xl pb-3">
                    <b>تسجيل الدخول</b>
                </p>
            </div>
            <div className="w-[100%] md:grid md:grid-cols-2 divide-gray-400 mt-11">
                <div className="w-[100%] flex flex-col font-hm-sans-arabic gap-11 lg:border-l border-gray-300">
                    <p className="md:text-xl invisible md:visible">
                        <b>تسجيل الدخول عن طريق البريد الالكتروني</b>
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-11 lg:pl-20 pb-4">
                        <Inputs handleChange={handleChange} data={formLoginData} />
                        <div className="flex md:flex-row align-middle md:gap-11 flex-col">
                            <button
                                type="submit"
                                className="bg-black text-white px-4 py-2 text-sm w-full md:w-[40%] h-11 hover:opacity-50 transition-opacity duration-200"
                            >
                                تسجيل الدخول
                            </button>
                            <Link
                                to="#"
                                className="flex flex-row md:justify-normal justify-center ml-4 text-sm pt-4 text-zinc-700 w-full hover:underline transition-all duration-200"
                            >
                                هل نسيت كلمه السر؟
                            </Link>
                        </div>
                    </form>
                </div>
                <LeftSide />
            </div>
        </div>
    );
};

export default Login;
