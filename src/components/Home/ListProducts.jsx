import React, { Component } from "react"
import Product from "../Home/Product"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

const getProductsQuery = graphql`
  {
    products: allContentfulCoffeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxWidth: 800, maxHeight: 500) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function ListProducts() {
  return (
    <StaticQuery
      query={getProductsQuery}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
