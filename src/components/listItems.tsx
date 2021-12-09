import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import HomeIcon from "@material-ui/icons/Home";
import PublicIcon from "@material-ui/icons/Public";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import NotesIcon from "@material-ui/icons/Notes";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AddIcon from "@mui/icons-material/Add";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const mainListItems = (
  <div>
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
    <ListItem button>
      <ListItemIcon>
        <DataUsageIcon />
      </ListItemIcon>
      <ListItemText primary="Insights" />
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
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      Accounts
      <ListItemIcon>
        <AddIcon fontSize="small" />
      </ListItemIcon>
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="99755736 (1-0)" secondary="SELECT-Cust 529 Plan" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="99780112 (1-2)" secondary="UMA-Bank" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="99755724 (1-4)" secondary="SELECT-Roth IRA" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="99755736 (1-4)" secondary="SELECT-SIMPLE IRA" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="99755736 (1-3)" secondary="SELECT-JOINT WROS" />
    </ListItem>
  </div>
);
