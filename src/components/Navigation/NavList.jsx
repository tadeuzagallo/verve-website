import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    },
    {
      primaryText: "Getting Started",
      leftIcon: <FontIcon forceSize iconClassName="fa fa-terminal"/>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Docs",
      leftIcon: <FontIcon forceSize iconClassName="fa fa-book"/>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "GitHub",
      leftIcon: <FontIcon forceSize iconClassName="fa fa-github"/>,
      component: Link,
      to: "/"
    },
  ];

  return NavList;
}
export default GetNavList;
