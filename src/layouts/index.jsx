import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import "prismjs"
import "prismjs/components/prism-bash";
import "prismjs/themes/prism.css"

import Navigation from "../components/Navigation/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";
import "./prism-verve";

export default class MainLayout extends React.Component {
  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { children } = this.props;
    return (
      <Navigation config={config}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children()}
      </Navigation>
    );
  }
}
