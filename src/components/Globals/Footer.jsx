import React, { Component } from "react"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h3>
              Roger's corporation &copy;
              {new Date().getFullYear().toString()}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
