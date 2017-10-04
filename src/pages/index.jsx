import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import "./index.scss"

class Index extends React.Component {
  render() {
    return (
      <div className="index-container code-split">
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <div className="logo-container">
          <img src="/logos/logo-name-bottom.svg" alt="Verve logo" />
          <h1 className="md-display-1 subtitle tagline">
            is a functional language for the working hacker
          </h1>
        </div>
        <pre ref={el => { this.preEl = el }} className="language-verve">
          <code className="language-verve">
{`
enum Shape {
  Square(Int)
  Rectangle(Int, Int)
}

interface Area<T> {
  let area : (T) -> Int
}

implementation Area<Shape> {
  fn area(s) {
    match s {
      case Square(x): x * x
      case Rectangle(x, y): x * y
    }
  }
}

Square(10).area()      // => 100 : Int
Rectangle(4, 5).area() // =>  20 : Int

class House {
  let rooms : List<Shape>
}

implementation Area<House> {
  fn area(h) {
    reduce((+), 0, map(area, h.rooms))
  }
}

House { rooms: [Square(10), Rectangle(4, 5)] }.area() // => 120 : Int
`}
          </code>
        </pre>
      </div>
    );
  }
}

export default Index;
