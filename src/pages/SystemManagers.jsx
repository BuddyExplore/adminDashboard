import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

/* Table data */
function createData(id, firstName, lastName, email, mobile) {
  return { id, firstName, lastName, email, mobile };
}

const rows = [
  createData(
    1,
    "Shehan",
    "Fernando",
    "sm.shehan.fernando@gmail.com",
    "077-4173123",
    ""
  ),
  createData(
    2,
    "Ayash",
    "Siriwardhana",
    "sm.ayash.siriwardhana@gmail.com",
    "072-7799378",
    ""
  ),
  createData(3, "Sanduni", "Perera", "sm.sanduni.perera@gmail.com", "078-3475228",""),
  createData(
    4,
    "Mohan",
    "Fernando",
    "sm.mohan.fernando@gmail.com",
    "077-2351415",
    ""
  ),
];

const CustomIconButton = styled(IconButton)({
  boxShadow: "none",
});

const SystemManagers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
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
      firstName: "Amali",
      lastName: "Perera",
      email: "sm.amali.perera@gmail.com",
      mobile: "077-1234567",
      password: "password",
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

  const totalRows = filteredRows.length;
  const displayedRows = Math.min(currentPage * rowsPerPage, totalRows);

  const uniqueRoles = [...new Set(rows.map((row) => row.role))];
  const uniqueStatuses = [...new Set(rows.map((row) => row.status))];

  return (
    <>
      <Box sx={{ alignItems: "right", textAlign: "right" }}>
        <div className="d-flex justify-content-end align-items-center mt-24 mb-1 ">
          <FormControl
            variant="outlined"
            style={{
              minWidth: 150,
              minHeight: 50,
              marginRight: "20px",
              borderRadius: "100px",
            }}
          >
            <InputLabel>Filter By Status</InputLabel>
            <Select
              value={filterByStatus}
              onChange={handleStatusFilterChange}
              label="Filter By Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {uniqueStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            style={{
              backgroundColor: "#0078A1",
              color: "white",
              borderShadow: "none",
              minHeight: 55,
              minWidth: 100,
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
                  <TableCell sx={{ fontWeight: "bold" }}>System Manager</TableCell>
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
                          variant="contained"
                          color="inherit"
                          size="small"
                          style={{ borderRadius: "10px", marginRight: "10px" }}
                        >
                          View
                        </Button>
                        <Button
                          variant="contained"
                          color="inherit"
                          size="small"
                          style={{ borderRadius: "10px", marginRight: "10px" }}
                        >
                          update
                        </Button>
                        <Button
                          variant="contained"
                          color="inherit"
                          size="small"
                          style={{ borderRadius: "10px", marginRight: "10px" }}
                        >
                          disable
                        </Button>
                        <Button
                          variant="contained"
                          color="inherit"
                          size="small"
                          style={{ borderRadius: "10px", marginRight: "10px" }}
                        >
                          delete
                        </Button>
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

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={styles.modal}>
          <h2>Add New User</h2>
          <TextField
            label="First Name"
            name="firstName"
            value={newUser.firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={newUser.lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Mobile"
            name="mobile"
            value={newUser.mobile}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={newUser.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveUser}
            fullWidth
          >
            Save User
          </Button>
        </Box>
      </Modal>
    </>
  );
};

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
    fontSize: 12,
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

export default SystemManagers;
