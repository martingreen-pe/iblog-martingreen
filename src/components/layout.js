import * as React from "react"
import Header from '../components/header'
import Navbar from "./Navbar/Navbar"
import Footer from '../components/Footer/footer'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Navbar></Navbar>
    )
  } else {
    header = (
      <Navbar></Navbar>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <header>{header}</header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
