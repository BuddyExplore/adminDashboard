import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const DashboardBox = ({ icon, title, amount, change, isPositive }) => {
  return (
    <Box
      className="dashboardBox"
      style={{
        width: "24%",
        marginTop: "5%",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <Box className="flex ">
        <Box
          className="flex-shrink-0"
          style={{
            marginRight: "10px",
            borderRadius: "50%",
            backgroundColor:"rgb(128,128,128,0.2)",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {React.cloneElement(icon, {
            style: {
              fontSize: 30,
              color: "#0078A1",
            },
          })}
        </Box>
        <Box style={{ flex: 1 }}>
          <Typography style={{ fontWeight: '500', color: '#4A4A4A', fontSize:'1.3rem' }}>
            {amount}
          </Typography>
          <Typography style={{ color: '#6B6B6B', fontSize: '0.8rem' }}>
            {title}
          </Typography>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'right' , marginLeft:'auto', marginTop:'auto'}}>
          <Typography style={{ color: isPositive ? '#4B6D4F' : '#D7A93B', fontSize: '0.8rem', 
            marginBottom:"0"
           }}>
            {change}
          </Typography>
          {isPositive ? (
            <ArrowUpwardIcon style={{ color: '#4B6D4F' }} />
          ) : (
            <ArrowDownwardIcon style={{ color: '#D7A93B' }} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardBox;
