import { Heart, Menu, SearchIcon, ShoppingBag } from "lucide-react";
import React from "react";
import BottomMenu from "./BottomMenu";
import Search from "./Search";
import Logo from "./Logo";
import Actions from "./Actions";
import TopMenu from "./TopMenu";

export const Navbar = () => {
    return (
        <div className="lg:h-[140px] sm:py-2 pt-1 flex flex-col">
            <TopMenu />
            <Header />
            <BottomMenu />
        </div>
    );
};

const Header = () => {
    return (
        <div className="flex flex-wrap justify-between items-center sm:p-2 ">
            <Search />
            <Logo />
            <Actions />
        </div>
    );
};
