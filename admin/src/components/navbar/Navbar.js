import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
