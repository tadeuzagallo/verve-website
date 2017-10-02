import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <div className="code-split" style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{flex: 1, textAlign: 'center'}}>
            <img src="/logos/logo-name-bottom.svg" style={{marginTop: '8em'}} />
            <h1 className="md-display-1 subtitle tagline" style={{marginTop: '20px', padding: '0 2em'}}>
              is a functional language for the working hacker
            </h1>
          </div>
          <pre ref={el => this.preEl = el} className="language-verve" style={{flex: 1}}>
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
  fn area(s: Shape) -> Int {
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
  fn area(h: House) -> Int {
    reduce((+), 0, map(area, h.rooms))
  }
}

House { rooms: [Square(10), Rectangle(4, 5)] }.area() // => 120 : Int
`}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Index;
