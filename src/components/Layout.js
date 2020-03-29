import React from "react"

import Header from "../components/Header"

export default ({ children, noHeader}) => (
  <div className="layout-container">
    {!noHeader && <Header />}
    {children}
  </div>
)
