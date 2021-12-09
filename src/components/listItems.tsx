import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from "@mui/icons-material/Assignment";

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
