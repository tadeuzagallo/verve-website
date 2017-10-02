import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions/ToolbarActions";
import Footer from "../Footer/Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { children, config } = this.props;

    return (
      <NavigationDrawer
        toolbarThemeType="themed"
        toolbarTitleMenu={<a ref="logo" href="/"><img src="/logos/logo.svg"/></a>}
        toolbarActions={<ToolbarActions config={config} />}
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        navItems={GetNavList(config)}
      >
        <div className="main-container">
          {children}
        </div>
        <Footer />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
