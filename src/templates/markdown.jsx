import React from "react"
import "./markdown.scss"

export default class MarkdownTemplate extends React.Component {
  render () {
    return (
      <div
        className="markdown-page"
        dangerouslySetInnerHTML={{
          __html: this.props.data.markdownRemark.html,
        }}
      />
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
    }
  }
`;
