import { useState } from "react";
import {
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Tooltip,
  Divider,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { IoSearch } from "react-icons/io5";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [messageAnchorEl, setMessageAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openNotifications = Boolean(notificationAnchorEl);
  const openMessages = Boolean(messageAnchorEl);
  const navigate = useNavigate();

  // Get current route from useLocation
  const location = useLocation();
  const path = location.pathname;

  // Map paths to page names
  const getPageName = (path) => {
    switch (path) {
      case "/":
        return "Dashboard";
      case "/dashboard":
        return "Dashboard";
      case "/systemManagers":
        return "System Managers";
      case "/feedbacks":
        return "System Feedbacks";
      case "/messages":
        return "Messages";
      case "/notifications":
        return "Notifications";
      default:
        return "Admin Dashboard";
    }
  };

  const handleDropdownToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsMenuOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleMessagesMenuOpen = (event) => {
    setMessageAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNotificationAnchorEl(null);
    setMessageAnchorEl(null);
  };

  const handleSeeAll = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <header className="fixed left-[15%] bg-transparent w-[85%] shadow-md z-50 flex items-center justify-between">
      <h2 className="text-black-800 font-bold text-xl">{getPageName(path)}</h2>

      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Notifications">
          <IconButton
            onClick={handleNotificationsMenuOpen}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={openNotifications ? "notifications-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openNotifications ? "true" : undefined}
          >
            <Badge color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={notificationAnchorEl}
          id="notifications-menu"
          open={openNotifications}
          onClose={handleClose}
          PaperProps={{
            sx: {
              maxWidth: "400px",
              overflow: "visible",
              borderRadius: "20px",
              border: "1px solid grey",
              backgroundColor: "white",
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Typography variant="body2">New message received</Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="body2">Password reset requested</Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => handleSeeAll("/notifications")}>
            <Typography variant="body2">See All</Typography>
          </MenuItem>
        </Menu>

        <Tooltip title="Messages">
          <IconButton
            onClick={handleMessagesMenuOpen}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={openMessages ? "messages-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMessages ? "true" : undefined}
          >
            <Badge color="primary" variant="dot">
              <MailIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={messageAnchorEl}
          id="messages-menu"
          open={openMessages}
          onClose={handleClose}
          PaperProps={{
            sx: {
              maxWidth: "400px",
              overflow: "visible",
              borderRadius: "20px",
              border: "1px solid grey",
              backgroundColor: "white",
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Typography variant="body2">Inquiry about tour</Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="body2">Booking confirmation</Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => handleSeeAll("/messages")}>
            <Typography variant="body2">See All</Typography>
          </MenuItem>
        </Menu>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleDropdownToggle}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </header>
  );
};

export default Header;
