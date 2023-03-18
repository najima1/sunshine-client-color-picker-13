import React from "react";

const Show_bg_color = ({ background }) => {
  return (
    <div
      data-aos="zoom-in"
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: background }}
    >
      <div className="bg-[#30336b] w-full text-center py-6">
        <h1 className="font-semibold text-[3rem] uppercase text-white ">
          code copyed
        </h1>
      </div>
    </div>
  );
};

export default Show_bg_color;
