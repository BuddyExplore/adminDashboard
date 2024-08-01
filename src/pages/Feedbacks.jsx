import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Rating } from "@mui/material";
import ReviewCard from "./components/ReviewCard"; // Import the ReviewCard component

/* Table data */
function createData(product, reviewer, email, review, rating, description, date, status) {
  return { product, reviewer, email, review, rating, description, date, status };
}

const rows = [
  createData(
    "",
    "Amanda Harvey",
    "amanda@gmail.com",
    "Excellent User Interface",
    5,
    "The system interface is very user-friendly and intuitive. Navigating through the features is seamless and enjoyable.",
    "2024-07-17, 5:48",
    ""
  ),
  createData(
    "",
    "Anne Richard",
    "anne@gmail.com",
    "Great Customer Support",
    4,
    "The customer support team is very responsive and helpful. They resolved my issue quickly and professionally.",
    "2024-07-01, 3:17",
    ""
  ),
  createData(
    "",
    "David Harrison",
    "david@gmail.com",
    "Informative Documentation",
    4,
    "The documentation provided is comprehensive and easy to understand. It greatly assisted me in using the system effectively.",
    "2020-06-25, 09:19",
    ""
  ),
];


const Feedbacks = () => {
  const [search, setSearch] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredRows(
      rows.filter(
        (row) =>
          row.product.toLowerCase().includes(search.toLowerCase()) ||
          row.reviewer.toLowerCase().includes(search.toLowerCase()) ||
          row.email.toLowerCase().includes(search.toLowerCase()) ||
          row.review.toLowerCase().includes(search.toLowerCase()) ||
          row.description.toLowerCase().includes(search.toLowerCase()) ||
          row.date.toLowerCase().includes(search.toLowerCase()) ||
          row.status.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const getStatusStyle = (status) => {
    if (status === "Replied") {
      return {
        color: "green",
        backgroundColor: "#d4edda",
        borderRadius: "4px",
        padding: "2px 8px",
      };
    } else if (status === "Reply") {
      return {
        color: "orange",
        backgroundColor: "#fff3cd",
        borderRadius: "4px",
        padding: "2px 8px",
      };
    }
    return {};
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "100px",
        }}
      ></div>

      <div className="mb-6">
        <ReviewCard /> {/* Include the ReviewCard component */}
      </div>

      <div
        className="card border-1 bg-white"
        style={{
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search reviews"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <div className="table-responsive py-3 px-5">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "50%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}></TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Reviewer</TableCell>
                  <TableCell sx={{ fontWeight: "bold"}}>Review</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.product} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">{row.product}</TableCell>
                    <TableCell>
                      {row.reviewer}
                      <div style={{ fontSize: "0.9em", color: "gray" }}>{row.email}</div>
                    </TableCell>
                    <TableCell>
                      <div style={{ fontWeight: "bold" }}>{row.review}</div>
                      <Rating name="read-only" value={row.rating} readOnly size="small" />
                      <div>{row.description}</div>
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <span style={getStatusStyle(row.status)}>{row.status}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
