import React, { Component } from "react";
import Filter from "./components/Filter";
import RecordTable from "./components/RecordTable";

class App extends Component {
  constructor() {
    super();
    this.state = { sortby: "name" };
  }

  render() {
    const { sortby } = this.state;
    return (
      <div className="container-fluid">
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Filter
          sortby={sortby}
          setSortBy={sortby => {
            this.setState({ sortby });
          }}
        ></Filter>
        <RecordTable sortby={sortby}></RecordTable>
      </div>
    );
  }
}

export default App;
