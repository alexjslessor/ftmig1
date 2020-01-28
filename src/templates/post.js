import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  // console.log(post)
  return (
    <Layout>
      <div>
        {/* <h1>{post.title}</h1> */}
        <h5>{post.date}</h5>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          date(formatString: "MMMM DD, YYYY")
          content
        }
      }
    }
  }
`
//Content contains title? Do we need to query title?
// Removing title and adding date instead.
