import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <StaticQuery query={graphql`
    {
      allWordpressPost {
        edges {
          node {
            id
            date
            title
            content
          }
        }
      }
    }
  `} render={props => (
    <div>
      {props.allWordpressPost.edges.map(post => (
        <div key={post.node.id}>
          <h1>
            {post.node.title}
          </h1>
          {/* <h3> */}
            {/* {post.node.date} */}
          {/* </h3> */}
          <div dangerouslySetInnerHTML={{__html: post.node.content}} />
        </div>
      ))}
    </div>
  )} />
  </Layout>
)

export default SecondPage
