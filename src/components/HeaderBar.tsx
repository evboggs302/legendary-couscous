import { Toolbar, IconButton, Typography, Badge } from "@mui/material/";
import { Notifications, Menu } from "@material-ui/icons/";
import { styled } from "@mui/material/styles";
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
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

function HeaderBar({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <AppBar position="absolute" open={open}>
      <StyledToolbar
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          pr: "24px", // keep right padding when drawer closed
        }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}>
          <Menu />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
}

export default HeaderBar;
