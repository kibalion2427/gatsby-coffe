import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"

export default function Background({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="tiitle text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

Background.defaultProps = {
  title: "DEFAULT TITLE",
  styleClass: "default-background",
}
