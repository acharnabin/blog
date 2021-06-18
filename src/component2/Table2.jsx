import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Exam</TableCell>
            <TableCell align="left">Board</TableCell>
            <TableCell align="left">INSTITUTION’S NAME</TableCell>
            <TableCell align="left">AVARAGE SUM C.G.P.A</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">
              Diploma in Computer Science & Technology
            </TableCell>
            <TableCell align="left">W.B.S.C.T.E</TableCell>
            <TableCell align="left">Central Calcutta Polytechnic</TableCell>
            <TableCell align="left">8.0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
