import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Button from "@mui/material/Button";
import {
  MdOutlineDashboard,
} from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { VscFeedback } from "react-icons/vsc";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (tabIndex, route) => {
    if (tabIndex === 3 || tabIndex === 10) {
      // Toggle the submenu for Approvals and Complains
      setActiveTab(tabIndex);
      setIsToggleSubmenu(!isToggleSubmenu);
    } else {
      // Direct navigation for other menu items
      setActiveTab(tabIndex);
      setIsToggleSubmenu(false);
      navigate(route);
    }
  };

  const handleSubmenuClick = (route) => {
    navigate(route);
  };

  return (
    <div
      className="sidebar fixed top-0 left-0 z-[100] w-[15%]"
      style={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        color: "red",
      }}
    >
      <Link to="/">
        <div className="logoWrapper flex justify-center items-center py-3 px-4">
          <img src={Logo} className="w-50 h-20 object-contain" />
        </div>
      </Link>

      <div className="sidebarTabs px-2 mt-4">
        <ul className="flex gap-3 flex-col" style={{ paddingRight: "10px" }}>
          {/*dashboard*/}
          <li>
            <Button
              className={`w-full flex items-center ${
                activeTab === 0 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(0, "/dashboard")}
            >
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <MdOutlineDashboard />
              </span>
              Dashboard
            </Button>
          </li>

          {/*system managers*/}
          <li>
            <Button
              className={`w-full flex items-center ${
                activeTab === 1 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(1, "/systemManagers")}
            >
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <HiOutlineUserGroup />
              </span>
              System Managers
            </Button>
          </li>

          {/*feedbacks*/}
          <li>
            <Button
              className={`w-full flex items-center ${
                activeTab === 2 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(2, "/feedbacks")}
            >
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <VscFeedback />
              </span>
              Feedbacks
            </Button>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
