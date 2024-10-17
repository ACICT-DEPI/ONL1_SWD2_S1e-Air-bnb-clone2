import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Inputs from '../components/Inputs'
import LeftSide from '../components/LoginLeftSide'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

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
            )

            const result = await response.json()

            if (response.ok) {
                localStorage.setItem('token', result.token)
                alert('تم إنشاء الحساب بنجاح!')
                console.log('User Registered:', result)
            } else {
                alert('فشل في إنشاء الحساب: ' + result.message)
            }
        } catch (err) {
            console.error('Registration Error:', err)
            alert('حدث خطأ أثناء التسجيل. حاول مرة أخرى.')
        }
    }

    return (
        <div className="md:w-[70%] mx-auto grid grid-cols-1 pt-9 w-full px-4 animate-slideUp relative">
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
                            />
                            <label
                                htmlFor="name"
                                className="text-black absolute right-0 h-full z-10 duration-300 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                            >
                                الاسم الكامل
                            </label>
                        </div>
                        <Inputs handleChange={handleChange} data={formData} />

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
    )
}

export default Register
