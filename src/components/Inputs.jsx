


const Inputs=()=>
    {
        return(
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
        )
    
    }
    
    
    export default Inputs