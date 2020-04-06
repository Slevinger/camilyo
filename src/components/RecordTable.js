import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const _sortby = sortby => ({
  name: (a, b) => {
    return a[sortby] > b[sortby] ? 1 : -1;
  },
  dob: (a, b) => {
    debugger;
    return Date.parse(a[sortby]) < Date.parse(b[sortby]) ? 1 : -1;
  }
});

class RecordTable extends Component {
  constructor() {
    super();

    this.people = [
      {
        name: "Veronica Mize",
        dob: "11/29/2011"
      },
      {
        name: "Cecilia Olsson",
        dob: "09/16/1992"
      },
      {
        name: "Peter Parker",
        dob: "01/16/1992"
      },
      {
        name: "Jimmy Shergil",
        dob: "12/12/2001"
      },
      {
        name: "Alexander Alfred",
        dob: "02/09/1891"
      },
      {
        name: "Janice Shroyer",
        dob: "12/01/1982"
      },
      {
        name: "Ralph White",
        dob: "11/30/2011"
      },
      {
        name: "Deborah T. Decker",
        dob: "10/31/1999"
      }
    ];
  }

  render() {
    const { sortby } = this.props;
    const sort = _sortby(sortby);
    debugger;
    return (
      <Paper className="width">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-header">Name</TableCell>
              <TableCell className="table-header">Date of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.people.sort(sort[sortby]).map(({ name, dob }) => (
              <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell>{dob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default RecordTable;
