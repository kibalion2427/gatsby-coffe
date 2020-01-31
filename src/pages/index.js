import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Globals/Background"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Background
      img={data.img.childImageSharp.fluid}
      title="Ecuadorian coffe"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    menu: allContentfulCoffeItem {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          category
        }
      }
    }
  }
`

export default IndexPage
