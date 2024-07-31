import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ReviewCard from "./components/ReviewCard"; // Import the ReviewCard component

/* Table data */
function createData(name, date, amount, status, mode) {
  return { name, date, amount, status, mode };
}

const rows = [
  createData("Trip to City Park", "2024-07-22", "$150", "Pending", "Car"),
  createData("Beach Excursion", "2024-07-23", "$300", "Completed", "Bus"),
  createData("Mountain Hiking", "2024-07-24", "$250", "Pending", "Shuttle"),
  createData("Zoo Visit", "2024-07-25", "$100", "Completed", "Rickshaw"),
  createData("Museum Tour", "2024-07-26", "$200", "Pending", "Bus"),
];

const Feedbacks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "100px",
        }}
      >
        
      </div>

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
        <h2 className="mb-4 font-bold text-sm pt-4 px-4">Transaction Details</h2>

        <div className="table-responsive py-3 px-5">
          <TableContainer>
            <Table sx={{ minWidth: "50%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Trip Name</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Mode of Transport</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">{row.mode}</TableCell>
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
