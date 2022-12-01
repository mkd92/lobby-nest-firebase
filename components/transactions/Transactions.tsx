import {
  FormControl,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React from "react";

const Transactions = () => {
  return (
    <Table aria-label="transaction table">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Paid Status</TableCell>
          <TableCell>Paid Through</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default Transactions;
