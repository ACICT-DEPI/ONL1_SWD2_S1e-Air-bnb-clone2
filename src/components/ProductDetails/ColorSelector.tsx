import { url } from 'inspector';
import React from 'react'
import { useState } from 'react';

const ColorSelector = ({colors=[]}) => {
   
    // State to store the selected color
    const [selectedColor, setSelectedColor] = useState('اختر لون');

    // Color options with corresponding Arabic names and their hex codes
    // const colors = [
    //     { name: 'ازرق', value: 'blue', hex: '#2b2839' },
    //     { name: 'اسود', value: 'black', hex: '#232120' },
    //     { name: 'بني', value: 'brown', hex: '#260a0e' }
    // ];

    // Handle the color click
    const handleColorClick = (color) => {
        setSelectedColor(color.label);
    };

    return (
        <div>
            {/* Display the selected color name */}
            <div className="color-selected text-sm mt-5">
                {selectedColor}
            </div>

            {/* Display the color thumbnails */}
            <div className="color-thumbnails mt-3 flex gap-1">
                {colors.map((color) => (
                    <div
                        key={color.id}
                        onClick={() => handleColorClick(color)}
                        className="color-thumbnail  cursor-pointer"
                        style={{
                            width:'47px',
                            height:'70px',
                            border: selectedColor === color.label ? '3px solid #000' : '1px solid #ccc'
                        }}
                    >
                        <img src={color.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ColorSelector