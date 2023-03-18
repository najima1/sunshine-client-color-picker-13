import React, { useState } from "react";
import { useProvider } from "../../Context/Context";
import music from "../../Audio/ping.mp3";
const Color_templete = ({ colors, setColor_bg }) => {
  const [copy_bg, setCopy_bg] = useState(true);
  const { showBg, setShowBg } = useProvider();

  //Audio tune will call after copy
  // the color code
  const tune = new Audio(music);

  //copy color code with click
  //
  const copyHandelar = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setColor_bg(code);
        setShowBg(true);

        //controll audio file
        tune.play();
        tune.currentTime = 0;
        tune.volume = 1;
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div
          onClick={() => copyHandelar(colors?.color_code)}
          className="copy_parent"
        >
          <div
            className="relative"
            style={{ backgroundColor: colors?.color_code }}
          >
            <div className="color_box_model flex items-center justify-center">
              <span className="copy font-semibold border border-gray-[2px] px-3 py-1 rounded ">
                Copy
              </span>
            </div>

            <h1 className="font-semibold p-2 text-white absolute bottom-0 right-0">
              {colors?.name}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Color_templete;
