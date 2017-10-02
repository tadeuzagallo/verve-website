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
      to: "/getting-started"
    },
    {
      primaryText: "Docs",
      leftIcon: <FontIcon forceSize iconClassName="fa fa-book"/>,
      component: 'a',
      href: "https://docs.verve-lang.org"
    },
    {
      primaryText: "GitHub",
      leftIcon: <FontIcon forceSize iconClassName="fa fa-github"/>,
      component: 'a',
      href: "https://github.com/tadeuzagallo/verve-lang"
    },
  ];

  return NavList;
}
export default GetNavList;
