import React, { useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";
import { toast } from "react-hot-toast";
import "./colorPicker.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#273c75");

  //copy color code by click the button
  //
  const copy_colorHandlar = (hex) => {
    navigator.clipboard
      .writeText(hex)
      .then(() => {
        toast.success("COPIED SUCCESSFULL");
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div
      data-aos="zoom-in"
      className="relative"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-[23%] w-full text-center">
        <h1 className=" text-2xl font-semibold text-[#f78fb3] ">
          Color Picker
        </h1>
        <button
          onClick={() => copy_colorHandlar(color)}
          className="text-white text-xl p-5 cursor-pointer font-semibold uppercase"
        >
          {color}
        </button>
      </div>

      <div className="flex items-center justify-center h-screen">
        <HexAlphaColorPicker color={color} onChange={setColor} />
      </div>
    </div>
  );
};

export default ColorPicker;
