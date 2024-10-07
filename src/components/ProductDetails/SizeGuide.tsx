import React, { useState } from 'react'

function SizeGuide({ closeSizeGuide }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                {/* Header with close button */}
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Size Guide - H&M</h2>
                    <button onClick={closeSizeGuide} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Size Guide Table */}
                <div className="mt-4">
                    <table className="table-auto w-full mt-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Size</th>
                                <th className="px-4 py-2">Chest (in)</th>
                                <th className="px-4 py-2">Waist (in)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">XXS</td>
                                <td className="border px-4 py-2">30-32</td>
                                <td className="border px-4 py-2">22-24</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">XS</td>
                                <td className="border px-4 py-2">32-34</td>
                                <td className="border px-4 py-2">24-26</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">S</td>
                                <td className="border px-4 py-2">34-36</td>
                                <td className="border px-4 py-2">28-30</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">M</td>
                                <td className="border px-4 py-2">38-40</td>
                                <td className="border px-4 py-2">32-34</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">L</td>
                                <td className="border px-4 py-2">42-44</td>
                                <td className="border px-4 py-2">36-38</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">XL</td>
                                <td className="border px-4 py-2">40-42</td>
                                <td className="border px-4 py-2">32-34</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SizeGuide