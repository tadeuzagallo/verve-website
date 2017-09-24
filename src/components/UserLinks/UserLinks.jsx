import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import "./UserLinks.scss";

class UserLinks extends Component {
  render() {
    return (
      <div className="user-links">
        <Button flat secondary href="/getting-started">Getting Started</Button>
        <Button flat secondary href="/docs">Docs</Button>
        <Button flat secondary href="https://github.com/tadeuzagallo/verve-lang">GitHub</Button>
      </div>
    );
  }
}

export default UserLinks;
