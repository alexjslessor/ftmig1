import React from "react"
import { Link } from "gatsby"
// import Image from "../components/image"
import SEO from "../components/seo"
// import { graphql, StaticQuery } from 'gatsby'
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>Home: Follow The Money Group</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug}>
          <hr/>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          <h5>{node.date}</h5>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
          slug
        }
      }
    }
  }
`






// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <Link to="/page-2/">Go to page 2</Link>

//     <StaticQuery query={graphql`
//     {
//       allWordpressPage {
//         edges {
//           node {
//             id
//             title
//             content
//           }
//         }
//       }
//     }
//   `} render={props => (
//     <div>
//       {props.allWordpressPage.edges.map(page => (
//         <div key={page.node.id}>
//           <h1>
//             {page.node.title}
//           </h1>
//           <div dangerouslySetInnerHTML={{__html: page.node.content}} />
//         </div>
//       ))}
//     </div>
//   )} />

//   </Layout>
// )

// export default IndexPage
