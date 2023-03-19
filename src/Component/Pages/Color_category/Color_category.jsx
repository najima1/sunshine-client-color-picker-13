import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Category_templete from "./Category_templete";
import "./category_grid.css";

const Color_category = () => {
  const { data: category = [], isLoading } = useQuery({
    queryKey: ["all_category"],
    queryFn: async () => {
      const res = await axios.get("all_category");

      return res.data.data;
    },
  });

  return (
    <div className="bg_img h-full md:h-screen bg-[#0a3d62]  p-3">
      <h1 className="font-semibold text-2xl py-3 text-white">FLAT UI COLOR</h1>

      <div  className="mt-11">
        <div className="category_grid">
          {category?.map((color) => (
            <Category_templete color={color} key={color._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Color_category;
