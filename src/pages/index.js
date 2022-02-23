import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Lord Krishna, playing a flute, with a deer on his right and a peacock to his left."
        src="../images/krishna.png"
      />
    </Layout>
  )
}

export default IndexPage