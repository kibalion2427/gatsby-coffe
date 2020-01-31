import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getMenuCategories = items => {
  let categories = items.map(items => {
    return items.node.category
  })
  let settedCategories = new Set(categories)
  return ["all", ...settedCategories].sort()
}
class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getMenuCategories(props.items.edges),
    }
  }
  filterMenuByCategory = category => {
    console.log(this.state)
    let tmpItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { coffeeItems: tmpItems }
      })
    } else {
      let filteredItems = tmpItems.filter(({ node }) => {
        return node.category === category
      })
      this.setState(() => {
        return { coffeeItems: filteredItems }
      })
    }
  }
  render() {
    console.log(this.state.categories)
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="button btn-yellow text-capitalize  m-3"
                      onClick={() => this.filterMenuByCategory(category)}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 mb-3 d-flex mx-auto"
                  >
                    {/* item img */}
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    {/* item text */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
