// Logo.js
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'


const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "gatsby-icon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <StaticImage
        alt="Lord Krishna, playing a flute, with a deer on his right and a peacock to his left."
        src="../../images/krishna.png"
      />
    </LogoWrap>
  )
}

export default Logo