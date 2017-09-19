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

        //drawerTitle={config.siteTitle}
        //navItems={GetNavList(config)}
        //mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        //tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        //desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        //toolbarActions={<ToolbarActions config={config} />}
    return (
      <div>
        <Toolbar
          titleMenu={<img src="/logos/logo.png"/>}
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
