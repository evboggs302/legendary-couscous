import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Title from "./Title";

// Generate Order Data
function createData(
  id: number,
  name: string,
  acctNum: string,
  prevDayBal: number,
  type: string,
  ach: boolean,
  swps: boolean
) {
  return { id, name, acctNum, prevDayBal, type, ach, swps };
}

function getRandomnumber() {
  return Math.random() * (15000 - 205) + 205;
}

const rows = [
  createData(
    0,
    "Gaga, Lady",
    "99755736 (1-0)",
    getRandomnumber(),
    "SELECT - Cust 529 Plan",
    false,
    false
  ),
  createData(
    1,
    "Garcia, Maria",
    "99780112 (1-2)",
    getRandomnumber(),
    "UMA - Bank",
    true,
    false
  ),
  createData(
    2,
    "Gaga, Lady",
    "99755724 (1-4)",
    getRandomnumber(),
    "SELECT - Roth IRA",
    false,
    false
  ),
  createData(
    4,
    "Gant, Kenny",
    "99755736 (1-4)",
    getRandomnumber(),
    "SELECT - SIMPLE IRA",
    false,
    false
  ),
  createData(
    5,
    "Gaga, Lady",
    "99755736 (1-3)",
    getRandomnumber(),
    "SELECT - JOINT WROS",
    false,
    true
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Open Accounts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Acct Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Prior Day's Balance</TableCell>
            <TableCell align="right">ACH</TableCell>
            <TableCell align="right">SWPS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.acctNum}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{formatter.format(row.prevDayBal)}</TableCell>
              {row.ach ? (
                <TableCell align="right">
                  <CheckCircleIcon style={{ fill: "green" }} />
                </TableCell>
              ) : (
                <TableCell align="right">{""}</TableCell>
              )}
              {row.swps ? (
                <TableCell align="right">
                  <CheckCircleIcon style={{ fill: "green" }} />
                </TableCell>
              ) : (
                <TableCell align="right">{""}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See Closed Accounts
      </Link>
    </React.Fragment>
  );
}
