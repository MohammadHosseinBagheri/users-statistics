import React from "react";
import { NavLink } from "react-router-dom";
import {
  IoIosCard,
  IoIosChatboxes,
  IoIosClose,
  IoIosPerson,
  IoIosStats,
} from "react-icons/io";
const Sidebar = () => {
  return (
    // <div className="">
    <div
      style={{ minHeight: "100vh", height: "100%" }}
      className=" col-md-1  d-none d-md-flex flex-column align-items-center sidebar_div__container"
    >
      <img
        src="/images/raychat_logo.jpg"
        className="rounded rounded-circle sidebar_img__logo mb-5"
        alt="logo"
      />
      <div className="d-flex flex-column w-100 align-items-center mt-5">
        <button
          to="/sadasd"
          disabled
          className="w-100 justify-content-center d-flex btn mt-1"
        >
          <IoIosCard size={25} color="#808080" />
        </button>
        <button
          disabled
          to="/gfj"
          className="w-100 justify-content-center d-flex btn mt-1"
        >
          <IoIosPerson size={25} color="#808080" />
        </button>
        <button
          disabled
          to="/igr"
          className="w-100 justify-content-center d-flex btn mt-1"
        >
          <IoIosChatboxes size={25} color="#808080" />
        </button>
        <button
          disabled
          to="/pookc"
          className="w-100 justify-content-center d-flex btn mt-1"
        >
          <IoIosClose size={25} color="#808080" />
        </button>
        <NavLink
          to="/"
          className="w-100 justify-content-center d-flex mt-1"
          activeClassName="sidebar_link__active"
        >
          <IoIosStats size={25} color="#808080" />
        </NavLink>
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
