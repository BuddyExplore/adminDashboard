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
    "Landmark",
    "Amanda Harvey",
    "amanda@gmail.com",
    "I just love it!",
    5,
    " The location is very nice. We were really excited to see that place. It offers a fantastic view and a great experience.",
    "2024-07-17, 5:48",
    "Replied"
  ),
  createData(
    "Booking",
    "Anne Richard",
    "anne@gmail.com",
    "Really nice",
    4,
    "The driver is really nice and good. He was very punctual and made the trip comfortable for us.",
    "2024-07-01, 3:17",
    "Reply"
  ),
  createData(
    "Blogs",
    "David Harrison",
    "david@gmail.com",
    "Helpful",
    4,
    "That blog gives us a lot of information about the place. It was very helpful in planning our visit.",
    "2020-06-25, 09:19",
    "Replied"
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
                  <TableCell sx={{ fontWeight: "bold", width: "30%" }}>Review</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
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
