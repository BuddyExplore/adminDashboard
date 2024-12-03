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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { IoSearch } from "react-icons/io5";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [messageAnchorEl, setMessageAnchorEl] = useState(null);
  const [openProfileDialog, setOpenProfileDialog] = useState(false);
  const [openChangePasswordDialog, setOpenChangePasswordDialog] = useState(false);

  // Password change form states
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterNewPassword, setReEnterNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const open = Boolean(anchorEl);
  const openNotifications = Boolean(notificationAnchorEl);
  const openMessages = Boolean(messageAnchorEl);
  const navigate = useNavigate();

  const location = useLocation();
  const path = location.pathname;

  const getPageName = (path) => {
    switch (path) {
      case "/":
        return "Dashboard";
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

  const handleProfileClick = () => {
    setOpenProfileDialog(true);
    handleClose();
  };

  const handleProfileDialogClose = () => {
    setOpenProfileDialog(false);
  };

  const handleChangePasswordDialogOpen = () => {
    setOpenChangePasswordDialog(true);
  };

  const handleChangePasswordDialogClose = () => {
    setOpenChangePasswordDialog(false);
  };

  // Handle password change logic
  const handlePasswordChange = () => {
    setErrorMessage(""); // Reset error message

    if (oldPassword === "") {
      setErrorMessage("Old password is required.");
      return;
    }

    if (newPassword === "") {
      setErrorMessage("New password is required.");
      return;
    }

    if (reEnterNewPassword === "") {
      setErrorMessage("Please re-enter the new password.");
      return;
    }

    if (newPassword !== reEnterNewPassword) {
      setErrorMessage("New passwords do not match.");
      return;
    }

    // Simulate password change (Replace with actual API call)
    console.log("Password changed successfully!");

    // Reset form and close dialog
    setOldPassword("");
    setNewPassword("");
    setReEnterNewPassword("");
    setOpenChangePasswordDialog(false);
  };

  return (
    <div>
      <header className="fixed left-[15%] bg-transparent w-[85%] shadow-md z-50 flex items-center justify-between">
        <h2 className="text-black-800 font-bold text-xl">{getPageName(path)}</h2>

        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          <Tooltip title="Notifications">
            <IconButton onClick={handleNotificationsMenuOpen} size="small" sx={{ ml: 2 }}>
              <Badge color="primary" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={notificationAnchorEl}
            open={openNotifications}
            onClose={handleClose}
            PaperProps={{ sx: { borderRadius: "10px", padding: "10px" } }}
          >
            <MenuItem>New message received</MenuItem>
            <MenuItem>Password reset requested</MenuItem>
            <Divider />
            <MenuItem onClick={() => navigate("/notifications")}>See All</MenuItem>
          </Menu>

          <Tooltip title="Messages">
            <IconButton onClick={handleMessagesMenuOpen} size="small" sx={{ ml: 2 }}>
              <Badge color="primary" variant="dot">
                <MailIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={messageAnchorEl}
            open={openMessages}
            onClose={handleClose}
            PaperProps={{ sx: { borderRadius: "10px", padding: "10px" } }}
          >
            <MenuItem>Inquiry about tour</MenuItem>
            <MenuItem>Booking confirmation</MenuItem>
            <Divider />
            <MenuItem onClick={() => navigate("/messages")}>See All</MenuItem>
          </Menu>

          <Tooltip title="Account settings">
            <IconButton onClick={handleDropdownToggle} size="small" sx={{ ml: 2 }}>
              <Avatar>M</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              sx: {
                overflow: "visible",
                mt: 1.5,
                "& .MuiAvatar-root": { ml: -0.5, mr: 1 },
              },
            }}
          >
            <MenuItem onClick={handleProfileClick}>
              <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleChangePasswordDialogOpen}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              Change Password
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </header>

      <main className="pt-20">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Users</Typography>
                <Typography variant="h4">1,234</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Active Users</Typography>
                <Typography variant="h4">345</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Revenue</Typography>
                <Typography variant="h4">$12,345</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>

      {/* Profile Dialog */}
      <Dialog open={openProfileDialog} onClose={handleProfileDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>Personal Information</DialogTitle>
        <DialogContent sx={{ width: "100%" }}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" fullWidth />
              </Grid>
            </Grid>

            <TextField label="Email Address" fullWidth />
            <TextField label="Contact Number" fullWidth />
            <TextField label="City" fullWidth />
            <TextField label="ZIP Code" fullWidth />
            <TextField label="BIO" fullWidth multiline rows={3} />

            <Box mt={3} display="flex" gap={2} alignItems="center">
              <Avatar sx={{ width: 80, height: 80 }}>M</Avatar>
              <Button variant="contained" component="label" startIcon={<PhotoCamera />}>
                Edit Photo
                <input hidden accept="image/*" type="file" />
              </Button>
            </Box>

            <Box mt={3} p={2} border="1px solid #ccc" borderRadius="8px">
              <Typography variant="h6">Account Details</Typography>
              <Button
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleChangePasswordDialogOpen}
              >
                Change Password
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileDialogClose}>Cancel</Button>
          <Button variant="contained" onClick={handleProfileDialogClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Change Password Dialog */}
      <Dialog open={openChangePasswordDialog} onClose={handleChangePasswordDialogClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            label="Old Password"
            type="password"
            fullWidth
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            margin="normal"
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Re-enter New Password"
            type="password"
            fullWidth
            value={reEnterNewPassword}
            onChange={(e) => setReEnterNewPassword(e.target.value)}
            margin="normal"
          />
          {errorMessage && (
            <Typography color="error" variant="body2" mt={1}>
              {errorMessage}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleChangePasswordDialogClose}>Cancel</Button>
          <Button variant="contained" onClick={handlePasswordChange}>
            Change Password
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
