import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [orders, setOrders] = useState<
        | {
              id: string;
              amount: number;
              createdAt: string;
              items: {
                  product: {
                      id: string;
                      title: string;
                      images: string[];
                      price: number;
                      category: string;
                      color: string;
                      size: string;
                  };
                  quantity: number;
              }[];
          }[]
        | []
    >([]);
    const naviagate = useNavigate();
    const [Loading, setLoading] = useState(true);
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (!token) {
        naviagate("/login");
    }
    const GetOrders = async () => {
        try {
            const response = await axios.get(
                "https://h-m-server.vercel.app/api/user/orders",
                {
                    headers: {
                        authorization:
                            "Bearer " + localStorage.getItem("token"),
                    },
                }
            );
            setOrders(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        GetOrders();
    }, []);

    return (
        <div className=" flex justify-between mt-20 md:w-auto w-full animate-slideUp relative px-4 h-full">
            <ProfileSidebar />
            <div className="w-[80%]  md:block hidden">
                <div className="w-[100%]  flex md:justify-start font-hm-sans-arabic  border-b  border-gray-300 justify-center ">
                    <p className="text-xl pb-1 font-light">
                        <b>حسابي</b>
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="w-[100%]  flex   md:justify-between   border-b  border-gray-300  mt-9">
                        <p className="text-lg pb-1 font-light">احدث الطلبات</p>
                        <button
                            type="submit"
                            className="bg-black text-white  text-sm font-light  md:w-[15%]   hover:opacity-50 transition-opacity duration-200 "
                        >
                            تعديل معلومات الحساب
                        </button>
                    </div>
                    <div className="my-2">
                        <OrdersTable Loading={Loading} orders={orders} />
                    </div>
                </div>
                <div className="w-[100%]  flex md:justify-center font-hm-sans-arabic  border-b  border-gray-300 items-center ">
                    <Link
                        to="/search"
                        className="bg-black hover:bg-black/80 duration-300 text-white p-2 px-10 my-2 "
                    >
                        اذهب للتسوق
                    </Link>
                </div>
                <div className="bg-blue-400	 p-8 my-4	">
                    <p className="text-white flex gap-3  ">
                        <AiOutlineInfoCircle className="text-white text-2xl font-bold inline  " />
                        هل تحتاج الي مساعده ف طلبيتك؟
                    </p>
                    <ul className="flex text-white text-sm gap-48 px-8 py-1 font-light">
                        <li>
                            <a>خدمه الزبائن</a>
                        </li>
                        <li>
                            <a>الاسترجاع والاستبدال</a>
                        </li>
                        <li>
                            <a>معلومات التوصيل</a>
                        </li>
                    </ul>
                </div>
                <div className="w-[100%]   md:justify-start font-hm-sans-arabic  border-b  border-gray-300 justify-center my-6 ">
                    <p className="text-lg pb-1 font-light">تفاصيل الحساب</p>
                </div>

                <p className="md:text-sm  text-lg  md:w-auto w-full font-light">
                    عنوان البريد الالكتروني
                </p>
                <p className="md:text-sm  text-lg  md:w-auto w-full font-light  text-neutral-500">
                    {email}
                </p>
            </div>
        </div>
    );
};

export default ProfilePage;

const ProfileSidebar = () => {
    return (
        <div className="flex flex-col justify-start gap-10 items-center md:w-auto w-full md:m-0 mb-20  ">
            <ul className="flex flex-col gap-5  text-gray-700 md:w-auto w-full  ">
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none">
                    <Link
                        to="#"
                        className=" md:text-sm  text-lg  md:w-auto w-full font-light "
                    >
                        <b>حسابي</b>
                    </Link>
                </li>
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                    <Link to="#" className=" md:text-sm  text-xl  font-light ">
                        بطاقه الهدايا
                    </Link>
                    <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                </li>
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                    <Link to="#" className="md:text-sm  text-xl font-light  ">
                        الطلبيات
                    </Link>
                    <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                </li>
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                    <Link to="#" className="md:text-sm  text-xl font-light">
                        تفاصيل الاتصال
                    </Link>
                    <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                </li>
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                    <Link to="#" className="md:text-sm  text-xl font-light">
                        سجل العناوين
                    </Link>
                    <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                </li>
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                    <Link to="#" className="md:text-sm  text-xl font-light">
                        مراجعه
                    </Link>
                    <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                </li>
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                    <Link to="#" className="md:text-sm  text-xl font-light">
                        المنتجات المفضله
                    </Link>
                    <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                </li>
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                    <Link to="#" className="md:text-sm  text-xl font-light ">
                        تفضيلات التواصل
                    </Link>
                    <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                </li>
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                    <Link to="#" className="md:text-sm  text-xl font-light ">
                        تغيير كلمه السر
                    </Link>
                    <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                </li>
                <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                    <Link to="#" className="md:text-sm  text-xl font-light">
                        تسجيل الخروج
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const OrdersTable = ({
    orders,
    Loading,
}: {
    orders: {
        id: string;
        amount: number;
        createdAt: string;
        items: {
            product: {
                id: string;
                title: string;
                images: string[];
                price: number;
                category: string;
                color: string;
                size: string;
            };
            quantity: number;
        }[];
    }[];
    Loading: boolean;
}) => {
    return (
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="border-b border-gray-300 ">
                    <th className="text-start border-l border-gray-300 px-2 py-2 whitespace-nowrap">
                        الرقم المرجعي
                    </th>
                    <th className="border-l border-gray-300 w-full ">
                        المنتجات{" "}
                    </th>
                    <th className="border-l border-gray-300 px-2">التاريخ</th>
                    <th className="border-l border-gray-300 px-2">الاجمالي</th>
                    <th className="border-l border-gray-300 px-2">الحاله</th>
                </tr>
            </thead>
            <tbody>
                {orders.length > 0 && Loading === false ? (
                    orders?.map((order, index) => (
                        <tr
                            key={index}
                            className="text-center border-b border-gray-300"
                        >
                            <td className="text-start border-l border-gray-300  px-2 py-2">
                                {order.id}
                            </td>
                            <td className="border-l border-gray-300 flex gap-2 flex-wrap text-center items-center justify-center">
                                {order.items.map((item, index) => (
                                    <Link
                                        to={`/product/${item.product.id}`}
                                        className="relative"
                                        key={index}
                                    >
                                        <img
                                            className="w-16 h-24 object-cover"
                                            src={item.product.images[1]}
                                        />
                                        <span className="absolute top-2 left-1 text-xs bg-red-500 text-white rounded-full size-4">
                                            {item.quantity}
                                        </span>
                                    </Link>
                                ))}
                            </td>
                            <td className="border-l border-gray-300 px-2">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>
                            <td className="border-l border-gray-300">
                                {order.amount}
                            </td>
                            <td className="whitespace-nowrap px-2">
                                في الطريق
                            </td>
                        </tr>
                    ))
                ) : Loading === false && orders.length === 0 ? (
                    <tr>
                        <td colSpan={5} className="text-center py-4">
                            لايوجد طلبات
                        </td>
                    </tr>
                ) : (
                    <tr className="animate-pulse bg-gray-200">
                        <td className="py-7"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
