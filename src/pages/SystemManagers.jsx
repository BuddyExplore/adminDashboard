import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const createData = (id, firstName, lastName, email, mobile, role, status) => {
  return { id, firstName, lastName, email, mobile, role, status };
};

const rows = [
  createData(1, "Amali", "Perera", "sm.amali.perera@gmail.com", "077-1234567", "Manager", "Approved"),
  createData(2, "Nimal", "Silva", "sm.nimal.silva@gmail.com", "071-2345678", "Manager", "Pending"),
  createData(3, "Kamal", "Fernando", "sm.kamal.fernando@gmail.com", "072-3456789", "Manager", "Rejected"),
  createData(4, "Sunil", "Wijesinghe", "sm.sunil.wijesinghe@gmail.com", "075-4567890", "Manager", "Approved"),
];

const inactiveRows = [
  createData(5, "Kavindu", "Weerasinghe", "sm.kavindu.weerasinghe@gmail.com", "077-7654321", "Manager", ""),
  createData(6, "Nadeesha", "Gunarathne", "sm.nadeesha.gunarathne@gmail.com", "071-1239874", "Manager", ""),
];

const SystemManagers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null); // For the second table
  const [filterByRole, setFilterByRole] = useState("");
  const [filterByStatus, setFilterByStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const rowsPerPage = 10;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleRoleFilterChange = (event) => {
    setFilterByRole(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setFilterByStatus(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    });
    setIsModalOpen(true);
  };

  const handleSaveUser = () => {
    console.log(newUser);
    handleCloseModal();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "green";
      case "Rejected":
        return "red";
      case "Pending":
        return "orange";
      default:
        return "black";
    }
  };

  const filteredRows = rows.filter((row) => {
    return (
      (!filterByRole || row.role === filterByRole) &&
      (!filterByStatus || row.status === filterByStatus)
    );
  });

  const filteredInactiveRows = inactiveRows.filter((row) => {
    return (
      (!filterByRole || row.role === filterByRole) &&
      (!filterByStatus || row.status === filterByStatus)
    );
  });

  const totalRows = filteredRows.length;
  const displayedRows = Math.min(currentPage * rowsPerPage, totalRows);

  const uniqueRoles = [...new Set(rows.map((row) => row.role))];
  const uniqueStatuses = [...new Set(rows.map((row) => row.status))];

  return (
    <>
      <Box sx={{ alignItems: "right", textAlign: "right" }}>
        <div className="d-flex justify-content-end align-items-center mt-24 mb-1">
          <Button
            style={{
              backgroundColor: "#0078A1",
              color: "white",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
              borderRadius: "10px",
              maxHeight: 40,
              minWidth: 120,
              padding: "10px 20px",
              fontSize: "16px",
              textTransform: "none",
            }}
            onClick={handleAddUser}
          >
            Add System Manager
          </Button>
        </div>
      </Box>

      <div
        className="card border-2 bg-white"
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          marginTop: "30px",
        }}
      >
        <div className="table-responsive py-3 px-5">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Active System Manager
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Mobile No</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}></TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredRows
                  .slice(
                    (currentPage - 1) * rowsPerPage,
                    currentPage * rowsPerPage
                  )
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>
                        <div style={styles.userContainer}>
                          <div style={styles.userInfo}>
                            <div>
                              {row.firstName} {row.lastName}
                            </div>
                            <div style={styles.userEmail}>{row.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{row.mobile}</TableCell>
                      <TableCell>
                        <Button
                          style={{
                            color: "green",
                            backgroundColor: "#d4edda",
                            borderRadius: "4px",
                            padding: "2px 8px",
                            marginRight: "10px",
                          }}
                        >
                          View
                        </Button>

                        <Button
                          style={{
                            color: "#0078A1",
                            backgroundColor: "rgb(0, 120, 161,0.2)", 
                            borderRadius: "4px",
                            padding: "2px 8px",
                          }}
                        >
                          Update
                        </Button>
                      </TableCell>
                      <TableCell style={{ marginLeft: "auto" }}>
                        <IconButton
                          aria-label="more"
                          aria-controls="long-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Disable</MenuItem>
                          <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "right",
          mt: 5,
          mb: 5,
          px: 4,
        }}
      >
        <span>
          {displayedRows} of {totalRows} rows
        </span>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(totalRows / rowsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
        <span>
          Page {currentPage} of {Math.ceil(totalRows / rowsPerPage)}
        </span>
      </Box>

      {/* Second table for Inactive System Managers */}
      <div
        className="card border-2 bg-white"
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          marginTop: "30px",
        }}
      >
        <div className="table-responsive py-3 px-5">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Inactive System Manager
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Mobile No</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}></TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredRows
                  .slice(
                    (currentPage - 1) * rowsPerPage,
                    currentPage * rowsPerPage
                  )
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>
                        <div style={styles.userContainer}>
                          <div style={styles.userInfo}>
                            <div>
                              {row.firstName} {row.lastName}
                            </div>
                            <div style={styles.userEmail}>{row.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{row.mobile}</TableCell>
                      <TableCell style={{ marginLeft: "auto" }}>
                        <IconButton
                          aria-label="more"
                          aria-controls="long-menu"
                          aria-haspopup="true"
                          onClick={handleClick2}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          anchorEl={anchorEl2}
                          keepMounted
                          open={Boolean(anchorEl2)}
                          onClose={handleClose2}
                        >
                          <MenuItem onClick={handleClose2}>
                            Make Active
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
            width: "50%",
          }}
        >
          <h2>Add System Manager</h2>
          <form>
            <TextField
              name="firstName"
              label="First Name"
              value={newUser.firstName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="lastName"
              label="Last Name"
              value={newUser.lastName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              value={newUser.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="mobile"
              label="Mobile"
              value={newUser.mobile}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={newUser.password}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                onClick={handleSaveUser}
                sx={{
                  backgroundColor: "#0078A1",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default SystemManagers;

const styles = {
  userContainer: {
    display: "flex",
    alignItems: "center",
  },
  userImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
  },
  userEmail: {
    color: "gray",
  },
};
