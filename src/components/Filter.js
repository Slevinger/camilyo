import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";

class Filter extends Component {
  render() {
    const { setSortBy, sortby } = this.props;
    return (
      <div className="checkboxes">
        <Checkbox
          checked={sortby === "name"}
          onChange={event => {
            if (event.target.checked) {
              setSortBy("name");
            }
          }}
        />
        <label>Name</label>
        <Checkbox
          checked={sortby === "dob"}
          onChange={event => {
            if (event.target.checked) {
              setSortBy("dob");
            }
          }}
        />
        <label>Age</label>
      </div>
    );
  }
}

export default Filter;
