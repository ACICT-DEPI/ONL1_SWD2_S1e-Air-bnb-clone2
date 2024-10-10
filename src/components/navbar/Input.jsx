// import React from 'react';
// import { SearchIcon } from 'lucide-react';
// import ProductsList from '../../routes/ProductsList';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom'

// const Input = () => {
//     const { input } = useParams() // استخدم نفس الاسم كما في المسار
//     return (
//         <>
//             <ProductsList  name={input} />
//         </>
//     );
// };

// export default Input;

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsList from '../../routes/ProductsList';

const Input = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query"); // جلب قيمة البحث من البارام

    return (
        <div>
            <ProductsList name={query} />
        </div>
    );
}

export default Input;

