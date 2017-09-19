import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import "./UserLinks.scss";

class UserLinks extends Component {
  render() {
    return (
      <div className="user-links">
        <Button flat secondary>Getting Started</Button>
        <Button flat secondary>Docs</Button>
        <Button flat secondary>GitHub</Button>
      </div>
    );
  }
}

export default UserLinks;
