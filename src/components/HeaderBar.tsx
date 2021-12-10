import { Toolbar, IconButton, Typography, Badge } from "@mui/material/";
import { Notifications } from "@material-ui/icons/";
import { styled } from "@mui/material/styles";
// import SearchBar from "./SearchBar";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  "@media all": {
    minHeight: 128,
  },
}));

function HeaderBar({ open }: { open: boolean }) {
  return (
    <AppBar position="absolute" open={open}>
      <StyledToolbar
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          pr: "24px",
        }}>
        <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Lady Gaga's Relationship
          <Typography
            variant="subtitle2"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}>
            12555 Manchester Rd., St. Louis MO 63131-3710
          </Typography>
        </Typography>

        {/* <SearchBar /> */}
        <IconButton color="inherit">
          <Badge badgeContent={4} color="primary">
            <Notifications />
          </Badge>
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
}

export default HeaderBar;
