import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>Hi, I'm Akai</h1>
    <p>Welcome to page 2</p>
    <Link to="/index/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
