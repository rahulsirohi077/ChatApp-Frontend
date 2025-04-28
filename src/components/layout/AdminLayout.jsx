import {
  Box,
  Drawer,
  Grid2,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { grayColor, matBlack } from "../../constants/color";
import {
  Close as CloseIcon,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Groups as GroupsIcon,
  Message as MessageIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import { Link as LinkComponent, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "../../redux/thunks/admin";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/chats",
    icon: <GroupsIcon />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];

const SideBar = ({ w = "100%" }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(adminLogout());
  };

  return (
    <Stack width={w} direction={"column"} spacing={"3rem"} p={"3rem"}>
      <Typography variant={"h5"} textTransform={"uppercase"}>
        Chat App
      </Typography>

      <Stack>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path
                ? {
                    bgcolor: matBlack,
                    color: "white",
                    "&:hover": {
                      color: grayColor,
                    },
                  }
                : {}
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}

        <Link onClick={logoutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon />
            <Typography>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};



const AdminLayout = ({ children }) => {

  const {isAdmin} = useSelector((state) => state.auth);
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  const handleClose = () => {
    setIsMobile(false);
  };

  if(!isAdmin) return <Navigate to={"/admin"} />;

  return (
    <Grid2 container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Grid2
        size={{
          md: 4,
          lg: 3,
        }}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <SideBar />
      </Grid2>
      <Grid2
        size={{
          xs: 12,
          md: 8,
          lg: 9,
        }}
        sx={{
          bgcolor: grayColor,
        }}
      >
        {children}
      </Grid2>

      <Drawer open={isMobile} onClose={handleMobile}>
        <SideBar w={"50vw"} />
      </Drawer>
    </Grid2>
  );
};

export default AdminLayout;
