import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Toolbar from "react-md/lib/Toolbars";
import ToolbarActions from "../ToolbarActions/ToolbarActions";
import Footer from "../Footer/Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { children, config } = this.props;

    return (
      <div>
        <Toolbar
          fixed
          themed
          titleMenu={<a ref="logo" href="/"><img src="/logos/logo.svg"/></a>}
          actions={<ToolbarActions config={config} />}
        />
        <main className="main-content">
          <div className="main-container">
            {children}
          </div>
        </main>
        <Footer userLinks={true} />
      </div>
    );
  }
}

export default Navigation;
