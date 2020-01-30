import React, { Component } from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our history" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate quaerat sit incidunt repudiandae. Laboriosam illo
              cupiditate voluptas iste eum cumque delectus, dicta magnam animi
              eius qui deleniti tenetur odit quas consequatur in, veritatis
              repellendus quisquam, maiores est dolore odio. Aliquid quaerat
              deserunt id modi velit doloremque, iusto eius excepturi earum?
            </p>
            <Link to="/about/">
              <button className="button text-uppercase btn-yellow">
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
