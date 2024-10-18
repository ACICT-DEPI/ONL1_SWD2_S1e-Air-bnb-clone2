const Inputs = ({ handleChange, data,emailError ,passwordError}) => {
    
    return (
        <>
            <div className=" border-b border-black pb-2 relative w-full">
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder=" "
                    className="outline-none bg-transparent w-full z-50  relative peer"
                    onChange={handleChange}
                    value={data.email}
                    required
                />
                <label
                    htmlFor="email"
                    className="text-black absolute right-0 h-full z-10 duration-300 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 "
                >
                    البريد الالكتروني
                </label>
                 {emailError && <span className="text-red-600 m-0 p-0 text-sm">{emailError}</span>} {/* عرض الخطأ إن وجد */}

            </div>
           
            <div className="w-full border-b border-black pb-2 relative">
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" "
                    className="outline-none bg-transparent w-full z-50  relative peer"
                    onChange={handleChange}
                    value={data.password}
                    required
                />
                <label
                    htmlFor="password"
                    className="text-black absolute right-0 h-full z-10 duration-300 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 "
                >
                    كلمة السر
                </label>
                {passwordError && <span className="text-red-600 m-0 p-0 text-sm">{passwordError}</span>} {/* عرض الخطأ إن وجد */}


            </div>
        </>
    )
}

export default Inputs



