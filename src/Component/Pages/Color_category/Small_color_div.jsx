import React from "react";

const Small_color_div = ({ value }) => {
  return (
    <div style={{ backgroundColor: value }} className="custom_box h-[45px]">
      <span className="inline-block "></span>
    </div>
  );
};

export default Small_color_div;
