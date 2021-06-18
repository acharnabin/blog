import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(exam, board, school, year, percentage) {
  return { exam, board, school, year, percentage };
}

const rows = [
  createData('Secondary','W.B.B.S.E' , 'Ramchandrapur Baikuntha Vidyapith(H.S)', 2016, '87%'),
  createData('H.S','W.B.B.S.E' , 'Ramchandrapur Baikuntha Vidyapith(H.S)', 2018, '78%'),

];

export default function BasicTable(props) {
  const classes = useStyles();
console.log(props)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Exam</TableCell>
            <TableCell align="left">Board</TableCell>
            <TableCell align="left">INSTITUTION’S NAME</TableCell>
            <TableCell align="left">YEAR OF PASSING</TableCell>
            <TableCell align="left">PERCENTAGE OF MARKS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.exam}>
              {/* <TableCell component="th" scope="row">
                {row.exam}
              </TableCell> */}
              <TableCell align="left">{row.exam}</TableCell>
              <TableCell align="left">{row.board}</TableCell>
              <TableCell align="left">{row.school}</TableCell>
              <TableCell align="left">{row.year}</TableCell>
              <TableCell align="left">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
