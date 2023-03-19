import React from "react";

const arrayLatter = [
  "PAST ME",
  "WILL DO",
  "COPIED",
  "GOT IT",
  "RIGHT ONE",
  "IT'LL GOOD",
  "IT'LL ROCK",
];

const Show_bg_color = ({ background }) => {
  const random = Math.round(Math.random() * arrayLatter.length);

  return (
    <div
      data-aos="zoom-in"
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: background }}
    >
      <div className="bg-[#30336b] w-full text-center py-6">
        <h1 className="font-semibold text-[3rem] uppercase text-white ">
          {arrayLatter[random] || "EXCELLENT"}
        </h1>
      </div>
    </div>
  );
};

export default Show_bg_color;
