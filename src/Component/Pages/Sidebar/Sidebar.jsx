import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Toggle_bar from "./Toggle_bar";
import img1 from "../../image/Screenshot_6.png";
import img2 from "../../image/Screenshot_8.png";
import img3 from "../../image/Screenshot_15.png";

const SidebarPro = () => {
  const { collapseSidebar } = useProSidebar(false);

  return (
    <>
      <div className="">
        <Sidebar className="h-screen">
          <Toggle_bar />
          <Menu>
            {/* home */}
            <MenuItem component={<Link to="/home" />}>
              <div className="flex items-center gap-x-4">
                <span>
                  <img className="max-w-[41px] rounded-md" src={img2} alt="" />
                </span>
                <span>Home</span>
              </div>
            </MenuItem>

            {/* documentation */}
            <MenuItem component={<Link to="/documentation" />}>
              <div className="flex items-center gap-x-4">
                <span>
                  <img className="max-w-[41px] rounded-md" src={img3} alt="" />
                </span>
                <span>Documentation</span>
              </div>
            </MenuItem>

            <MenuItem component={<Link to="/color_piker" />}>
              <div className="flex items-center gap-x-4">
                <span>
                  <img className="max-w-[41px] rounded-md" src={img1} alt="" />
                </span>
                <span>Color picker</span>
              </div>
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      ;
    </>
  );
};

export default SidebarPro;
