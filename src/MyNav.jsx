import React from "react";
import { element } from "prop-types";

export default class MyNav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.nav.map((data, key) => {
            return <li key={key}>{data}</li>;
          })}
        </ul>
      </div>
    );
  }
}
