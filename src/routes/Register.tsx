import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Inputs from '../components/Inputs';
import LeftSide from '../components/LoginLeftSide';
import {  useNavigate } from 'react-router-dom'; // Import useNavigate hook


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [nameError, setNameError] = useState(''); // رسالة خطأ الاسم
    const [emailError, setEmailError] = useState(''); // رسالة خطأ البريد
    const [passwordError, setPasswordError] = useState(''); // رسالة خطأ كلمة المرور

    // نمط التحقق من صحة الاسم (يجب أن يكون الاسم 3 أحرف على الأقل)
    const namePattern = /^[a-zA-Z\u0621-\u064A ]{3,}$/; 

    // نمط التحقق من صحة البريد الإلكتروني
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // نمط التحقق من كلمة المرور (8 أحرف، تحتوي على حرف كبير وصغير ورقم)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // إزالة الأخطاء أثناء الكتابة إذا كانت المدخلات صحيحة
        if (name === 'name' && namePattern.test(value)) {
            setNameError('');
        }
        if (name === 'email' && emailPattern.test(value)) {
            setEmailError('');
        }
        if (name === 'password' && passwordPattern.test(value)) {
            setPasswordError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;

        // تحقق من صحة الاسم
        if (!namePattern.test(formData.name)) {
            setNameError('يجب أن يحتوي الاسم على 3 أحرف على الأقل.');
            valid = false;
        } else {
            setNameError('');
        }

        // تحقق من صحة البريد الإلكتروني
        if (!emailPattern.test(formData.email)) {
            setEmailError('الرجاء إدخال بريد إلكتروني صالح (مثل: example@gmail.com).');
            valid = false;
        } else {
            setEmailError('');
        }

        // تحقق من صحة كلمة المرور
        if (!passwordPattern.test(formData.password)) {
            setPasswordError(
                'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، تشمل حرفًا كبيرًا، حرفًا صغيرًا، ورقمًا.'
            );
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            try {
                const response = await fetch(
                    'https://h-m-server.vercel.app/api/user/register',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    }
                );

                const result = await response.json();

                if (response.ok) {
                    localStorage.setItem('token', result.token);
                    navigate('/Login');
                    console.log('User Registered:', result);
                } else {
                    console.log('فشل في إنشاء الحساب: ' + result.message);
                }
            } catch (err) {
                console.error('Registration Error:', err);
            }
        }
    };

    return (
        <div className="md:w-[70%] mx-auto grid grid-cols-1 pt-9 w-full px-4">
            <div className="w-[100%] flex md:justify-start font-hm-sans-arabic border-b border-gray-300 justify-center">
                <p className="text-xl pb-3">
                    <b>انشاء حساب جديد</b>
                </p>
            </div>
            <div className="w-[100%] md:grid md:grid-cols-2 divide-gray-400 mt-11">
                <div className="w-[100%] flex flex-col font-hm-sans-arabic gap-9 lg:border-l border-gray-300">
                    <p className="md:text-xl invisible md:visible">
                        <b>سجل الدخول عن طريق البريد الالكتروني</b>
                    </p>

                    <form
                        className="flex flex-col gap-11 lg:pl-20 pb-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="w-[100%] border-b border-black pb-2 relative">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                className="outline-none bg-transparent w-full z-50 relative peer"
                                onChange={handleChange}
                                value={formData.name}
                                required
                            />
                            <label
                                htmlFor="name"
                                className="text-black absolute right-0 h-full z-10 duration-300 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                            >
                                الاسم الكامل
                            </label>
                            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                        </div>

                        <Inputs
                            handleChange={handleChange}
                            data={formData}
                            passwordError={passwordError}
                            emailError={emailError}
                        />

                        <div className="flex flex-col gap-2 w-full lg:justify-items-start justify-items-center items-center lg:items-start">
                            <ReCAPTCHA sitekey="6LdHf1kqAAAAAIn60o8LzP1KtOgsA07k1gvo00Vd" />
                            <div className="flex gap-1 items-center lg:items-start justify-items-center">
                                <input type="checkbox" />
                                <p className="text-sm">
                                    ارغب في الحصول علي عروض حصريه من اتش اند ام
                                </p>
                            </div>
                            <p className="text-xs lg:w-56 text-gray-500">
                                تسجيل بياناتك يعني الموافقه علي الشروط والاحكام
                                وسياسه الخصوصيه
                            </p>
                        </div>

                        <div className="flex md:flex-row align-middle md:gap-11 flex-col w-full">
                            <button
                                type="submit"
                                className="bg-black text-white px-4 py-2 text-sm w-full md:w-[40%] h-11 hover:opacity-50 transition-opacity duration-200 mb-24"
                            >
                                انشاء حساب جديد
                            </button>
                        </div>
                    </form>
                </div>
                <LeftSide />
            </div>
        </div>
    );
};

export default Register;
