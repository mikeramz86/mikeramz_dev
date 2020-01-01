import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h2>This will be your Contact Page</h2>
    <p>Will be adding something here...idk what yet</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
