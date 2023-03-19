import React from "react";
import Small_color_div from "./Small_color_div";
import "./category_grid.css";
import { Link } from "react-router-dom";

const Category_templete = ({ color }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Link to={`/color/${color?.category}`}>
        <div className="border-[5px] border-orange-400 p-1 rounded-md bg-white">
          <div>
            <div className="small_color_grid ">
              {color?.color?.map((v, index) => (
                <Small_color_div value={v} key={index} />
              ))}
            </div>
          </div>
          <h1 className="block font-semibold text-xl py-2">
            {color?.color_name}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Category_templete;
