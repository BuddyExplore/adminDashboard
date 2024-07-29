import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Grid } from "@mui/material";
import TransactionCard from "./components/transactionCard";
import ReactApexChart from "react-apexcharts";

/*transactionCard data*/
const data3 = [
  { name: "Jan 01", value: 30 },
  { name: "Jan 02", value: 20 },
  { name: "Jan 03", value: 27 },
  { name: "Jan 04", value: 18 },
  { name: "Jan 05", value: 23 },
  { name: "Jan 06", value: 34 },
  { name: "Jan 07", value: 28 },
  { name: "Jan 08", value: 24 },
  { name: "Jan 09", value: 29 },
  { name: "Jan 10", value: 32 },
];

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

const Revenue = () => {
  
  /* Pie chart data */
  const [pieChartState, setPieChartState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      labels: ['Car', 'Van', 'Three Wheel', 'Bus', 'Motor Cycle'],
      colors: ['#0078A1', '#4B6D4F', '#39539E', '#70D6E3', '#D7A93B'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  
  /* Column chart data */
  const [columnChartState, setColumnChartState] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: 'Rs. (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `Rs. ${val} thousands`,
        },
      },
      colors: ['#0078A1', '#4B6D4F', '#39539E'], 
    },
  });

  /* Line chart data */
  const [lineChartState, setLineChartState] = useState({
    series: [
      {
        name: "STOCK ABC",
        data: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Fundamental Analysis of Transactions',
        align: 'left',
      },
      subtitle: {
        //text: 'Price Movements',
        align: 'left',
      },
      labels: ['2021-09-06T00:00:00.000Z', '2021-09-07T00:00:00.000Z', '2021-09-08T00:00:00.000Z', '2021-09-09T00:00:00.000Z', '2021-09-10T00:00:00.000Z', '2021-09-11T00:00:00.000Z', '2021-09-12T00:00:00.000Z', '2021-09-13T00:00:00.000Z', '2021-09-14T00:00:00.000Z', '2021-09-15T00:00:00.000Z', '2021-09-16T00:00:00.000Z', '2021-09-17T00:00:00.000Z', '2021-09-18T00:00:00.000Z', '2021-09-19T00:00:00.000Z', '2021-09-20T00:00:00.000Z', '2021-09-21T00:00:00.000Z', '2021-09-22T00:00:00.000Z', '2021-09-23T00:00:00.000Z', '2021-09-24T00:00:00.000Z', '2021-09-25T00:00:00.000Z'],
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
      colors: ['#39539E'], 
    },
  });


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      {/*transaction cards*/}
      <div style={{ marginTop: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TransactionCard
              title="Revenue Status"
              value="Rs. 3000"
              chartType="bar"
              data={data3}
              color="#fff"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TransactionCard
              title="Page View"
              value="Rs. 5600"
              chartType="line"
              data={data3}
              color="#fff"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TransactionCard
              title="Bounce Rate"
              value="Rs. 7600"
              chartType="line"
              data={data3}
              color="#fff"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TransactionCard
              title="Revenue Status"
              value="Rs. 5470"
              chartType="bar"
              data={data3}
              color="#fff"
            />
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="mb-6 font-bold text-sm pt-4 px-4">
            Transaction Calendar
          </h2>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar defaultValue={dayjs("2024-07-22")} readOnly />
          </LocalizationProvider>
        </div>

        <div
          className="card border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "65%",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 px-4">
            Transaction Details
          </h2>

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
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "60px",
        }}
      >
        <div
          className="card border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "35%",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 px-4">
            Transport Transactions
          </h2>
          <div style={{ width: "100%", height: 300 }}>
            <div id="chart">
              <ReactApexChart
                options={pieChartState.options}
                series={pieChartState.series}
                type="donut"
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>

        <div
          className="card border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "60%",
          }}
        >
          <h2 className="mb-1 font-bold text-sm pt-4 px-4">
            Transaction Overview
          </h2>
          <div id="chart">
            <ReactApexChart
              options={columnChartState.options}
              series={columnChartState.series}
              type="bar"
              height={350}
            />
          </div>
          <div id="html-dist"></div>
        </div>
      </div>

      <div
        className="card mt-14 border-1 bg-white"
        style={{
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          marginBottom:"50px"
        }}
      >
        {/*<h2 className="mb-4 font-bold text-sm pt-4 px-4">Line Chart Example</h2>*/}
        <div style={{ width: "100%", height: 350, }}>
          <div id="chart">
            <ReactApexChart
              options={lineChartState.options}
              series={lineChartState.series}
              type="area"
              height={300}
            />
          </div>
          <div id="html-dist"></div>
        </div>
      </div>

    </>
  );
};

export default Revenue;
