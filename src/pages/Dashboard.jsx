import { useEffect, useState } from "react";
import DashboardBox from "./components/dashboardBox";
import ReactApexChart from "react-apexcharts";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaCarCrash } from "react-icons/fa";

/* table data */
function createTripData(id, destination, departureDate, arrivalDate, status) {
  return { id, destination, departureDate, arrivalDate, status };
}

const rows = [
  createTripData("T001", "Paris", "2024-08-01", "2024-08-05", "Pending"),
  createTripData("T002", "New York", "2024-08-10", "2024-08-15", "Confirmed"),
  createTripData("T003", "Tokyo", "2024-09-01", "2024-09-07", "Cancelled"),
  createTripData("T004", "Sydney", "2024-09-15", "2024-09-20", "Pending"),
  createTripData("T005", "London", "2024-10-01", "2024-10-07", "Confirmed"),
];

const Dashboard = () => {
  /*line chart data*/
  const [state, setState] = useState({
    series: [
      {
        name: "Previous Month",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Last 12 days",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      colors: ["#0078A1", "#4B6D4F"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09",
          "2018-10",
          "2018-11",
          "2018-12",
          "2019-01",
          "2019-02",
          "2019-03",
        ],
      },
      tooltip: {
        x: {
          format: "MM",
        },
      },
    },
  });

  /*radialbar chart data*/
  const [radialBar, setRadialBar] = useState({
    series: [76, 67, 61],
    options: {
      chart: {
        height: 250,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            offsetX: -8,
            fontSize: "16px",
            formatter: function (seriesName, opts) {
              return (
                seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              );
            },
          },
        },
      },
      colors: ["#0078A1", "#4B6D4F", "#39539E"],
      labels: ["landmarks", "bookings", "blogs"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });

  /*bar data*/
  const [bar, setBar] = useState({
    series: [
      {
        name: "SM01 - Mr.Shehan",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "SM02  - Mr.Ayash",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
      {
        name: "SM03 - Ms.Sanduni",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
      {
        name: "SM04 - Mr.Mohan",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "Rs. (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "Rs. " + val + " thousands";
          },
        },
      },
      colors: ["#0078A1", "#4B6D4F", "#70D6E3", "#39539E", "#D7A93B"],
    },
  });

  /*column chart*/
  const [column, setColumn] = useState({
    series: [
      {
        data: [53, 32, 33, 52, 13, 44, 32, 4],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: [
          "Tourist",
          "Tour Guide",
          "Vehicle Owner",
          "Shop Manager",
          "Hotel Manager",
          "Activity Manager",
          "System Manager",
        ],
      },
      colors: ["#39539E"],
    },
  });

  /*area chart*/
  const [area, setArea] = useState({
    series: [
      {
        name: "car",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "van",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "threeWheel",
        data: [9, 23, 41, 23, 10, 8, 10],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "date",
        categories: ["Dec", "Jan", "Feb", "March", "April", "May", "June"],
      },
      tooltip: {
        x: {
          format: "MM",
        },
      },
      colors: ["#0078A1", "#4B6D4F", "#39539E"],
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="section py-3 px-3 w-[full]">
        <div className="dashboardWrapper flex justify-between">
          <DashboardBox
            icon={<PaymentsOutlinedIcon />}
            title="Total Expenses"
            amount="Rs.2000"
            change="0.43%"
            isPositive={true}
          />
          <DashboardBox
            icon={<MdOutlineTravelExplore />}
            title="Recently Added Locations"
            amount="10"
            isPositive={true}
          />
          <DashboardBox
            icon={<LuggageOutlinedIcon />}
            title="Total Trips"
            amount="200"
            isPositive={true}
          />
          <DashboardBox
            icon={<FaCarCrash />}
            title="Vehicle Breakdowns"
            amount="450"
            change="0.95%"
            isPositive={false}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="card mt-10 border-0"
          style={{
            width: "55%",
            border: "2px solid white",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <h2 className="mb-4 font-bold text-sm">Revenue</h2>
          <div>
            <div id="chart">
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="area"
                height={350}
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>

        <div
          className="card mt-10 border-1 bg-white"
          style={{
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "40%",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 px-4">
            Complains handled by System Managers
          </h2>
          <div style={{ width: "100%", height: 300 }}>
            <div id="chart">
              <ReactApexChart
                options={bar.options}
                series={bar.series}
                type="bar"
                height={350}
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>
      </div>

      <div
        className="card mt-10 border-1 bg-white"
        style={{
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
        }}
      >
        <h2 className="mb-4 font-bold text-sm pt-4 px-4">
          Recently Added Locations
        </h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: "40%",
              border: "2px solid white",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              position: "relative",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <div
          className="card mt-10 border-1 bg-white"
          style={{
            flex: 1,
            margin: "0 10px",
            border: "2px solid white",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 ">Reviews</h2>
          <div style={{ width: "100%", height: 300 }}>
            <div id="chart">
              <ReactApexChart
                options={radialBar.options}
                series={radialBar.series}
                type="radialBar"
                height={350}
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>

        <div
          className="card mt-10 border-1 bg-white"
          style={{
            flex: 1,
            margin: "0 10px",
            border: "2px solid white",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 ">User Count</h2>
          <div style={{ width: "100%", height: 300 }}>
            <div id="chart">
              <ReactApexChart
                options={column.options}
                series={column.series}
                type="bar"
                height={250}
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>

        <div
          className="card mt-10 border-1 bg-white"
          style={{
            flex: 1,
            margin: "0 10px",
            border: "2px solid white",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <h2 className="mb-4 font-bold text-sm pt-4 ">
            Most Used Travel Types
          </h2>
          <div style={{ width: "100%", height: 300 }}>
            <div id="chart">
              <ReactApexChart
                options={area.options}
                series={area.series}
                type="area"
                height={250}
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
