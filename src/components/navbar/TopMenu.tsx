import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TopMenu = () => {
    const [User, setUser] = useState()
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') as string)
        setUser(user)
    }, [])

    return (
        <div className=" mx-auto w-fit   justify-center items-center sm:py-1 py-0 hidden lg:flex">
            <ul className="flex gap-2 text-sm font-normal ">
                {User ? (
                    <>
                        <li>
                            <Link to="/ProfilePage">حسابي</Link>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setUser(undefined)
                                    localStorage.removeItem('user')
                                    localStorage.removeItem('token')
                                }}
                            >
                                تسجيل الخروج
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/register">تسجيل مستخدم جديد</Link>
                        </li>
                        <li>
                            <Link to="/login">تسجيل الدخول</Link>
                        </li>
                    </>
                )}
                <li>
                    <a href="#">البحث عن محلاتنا</a>
                </li>
                <li>
                    <a href="#">English</a>
                </li>
            </ul>
        </div>
    )
}

export default TopMenu
