import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog Page" />
    <h2>Will this be a place for blogs</h2>
    <p>My projects will live here</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
