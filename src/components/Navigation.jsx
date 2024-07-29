import React from "react";
import {
  Button,
} from "@mui/material"; 


import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

export default function Navigation() {
  const menuItems = [
  ];

  const { user } = useAuthContext()

  const { handleLogout } = useLogout()

    
  
}
