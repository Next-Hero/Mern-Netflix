import {
  MdSearch,
  MdNotificationAdd,
  MdOutlineArrowDropDown,
} from "react-icons/md";

import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <MdSearch className="icon" />
          <span>KID</span>
          <MdNotificationAdd className="icon" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFPb_NBVHOJJDrsd0Is8m6XCGmtcajRtxYt8YYqQjpSOFygkCa1rAe6Jlu_HiYEEqv_0&usqp=CAU"
            alt=""
          />
          <div className="profile">
            <MdOutlineArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
