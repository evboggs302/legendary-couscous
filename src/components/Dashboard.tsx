import * as React from "react";
import logo from "../logo.svg";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { styled } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PublicIcon from "@material-ui/icons/Public";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import NotesIcon from "@material-ui/icons/Notes";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import { secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Accounts from "./Accounts";
import HeaderBar from "./HeaderBar";
import InsightsModal from "./Modal";
import { useAppSelector, useAppDispatch } from "../dux/store";
import { toggleInsights } from "../dux/insightsSlice";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://parksandrecreation.fandom.com/wiki/Ron_Swanson">
        FredwardJoneski.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

const mdTheme = createTheme();

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

function DashboardContent() {
  const open = true;

  const { insights } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HeaderBar open={open} />
        <Drawer variant="permanent" open={true}>
          <StyledToolbar
            sx={{
              backgroundColor: "#212121",
            }}>
            <img alt="" src={logo} style={{ maxHeight: "45px" }} />
          </StyledToolbar>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Info" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <NotesIcon />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItem>
            <ListItem button onClick={() => dispatch(toggleInsights())}>
              <ListItemIcon>
                <DataUsageIcon />
              </ListItemIcon>
              <ListItemText primary="360 Discovery" />
              <ListItemIcon>
                <FiberNewIcon
                  fontSize="large"
                  style={{ fill: "orange", paddingLeft: "18px" }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CallSplitIcon />
              </ListItemIcon>
              <ListItemText primary="Opportunities" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary="Online Accts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Tax Forms" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SyncAltIcon />
              </ListItemIcon>
              <ListItemText primary="AM Center" />
            </ListItem>
          </List>
          <Divider />
          <List>{secondaryListItems}</List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, paddingTop: "80px" }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}>
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              {insights.open && <InsightsModal />}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}>
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Accounts */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Accounts />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
