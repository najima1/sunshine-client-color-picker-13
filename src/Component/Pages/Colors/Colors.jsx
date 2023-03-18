import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Color_templete from "./Color_templete";
import "./colors.css";
import { useProvider } from "../../Context/Context";
import Show_bg_color from "../Show_bg_color/Show_bg_color";

const Colors = () => {
  const color_name = useParams();
  const navigate = useNavigate();
  const { color_Bg, setColor_bg, showBg, setShowBg } = useProvider();

  //
  const { data: colors = [], isLoading } = useQuery({
    queryKey: ["filter_color"],
    enabled: !!color_name,
    queryFn: async () => {
      const res = await axios.get(`filter_color/${color_name?.color_name}`);

      return res.data.data;
    },
  });

  // generate back button
  //
  const backButton = () => {
    navigate(-1);
  };

  //The setShowBg function will false after 1 second
  // to hidden background color
  useEffect(() => {
    setTimeout(() => {
      setShowBg(false);
    }, 1000);
  }, [showBg]);

  return (
    <>
      {showBg ? (
        <Show_bg_color background={color_Bg} />
      ) : (
        <div>
          <h1
            onClick={() => backButton()}
            className="text-xl font-semibold py-3 flex items-center gap-2"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </span>
            <span> Back</span>
          </h1>
          <div className="color_grid">
            {colors?.colors?.map((v, i) => (
              <Color_templete setColor_bg={setColor_bg} colors={v} key={i} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Colors;
