import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const Share = ({ closeShare }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                {/* Header with close button */}
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">شارك</h2>
                    <button onClick={closeShare} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <ul className='flex flex-col gap-4 mt-4'>
                    <li className='flex flex-row items-center gap-3 hover:text-gray-700 cursor-pointer'><FaFacebookSquare />Facebook</li>
                    <li className='flex flex-row items-center gap-3  hover:text-gray-700 cursor-pointer'><FaPinterestSquare />Pinterest</li>
                    <li className='flex flex-row items-center gap-3  hover:text-gray-700 cursor-pointer'><RiTwitterXFill />Twitter</li>
                </ul>
            </div>
        </div>

    )
}

export default Share