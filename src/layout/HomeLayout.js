import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../component/Navbar";

export function HomeLayout(props) {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}
