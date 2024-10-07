import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto  bg-[#faf9f8] flex flex-col">
            <Navbar />
            <div className=" lg:min-h-[calc(100vh-140px)] min-h-[calc(100vh-89px)] mx-auto w-full flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;
