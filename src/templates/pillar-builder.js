import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import PillarBuilder from '../components/PillarBuilder'
import DefaultHead from '../components/Head/DefaultHead'

const Pillar = ({ data }) => {
  
  return (
    <Layout nav={true}>
      <PillarBuilder blocks={data.page.frontmatter.blocks} />
    </Layout>
  )
}

Pillar.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Pillar

export const Head = ({ data }) => (
  <DefaultHead data={data.page.frontmatter.seo}>
    <meta id="type" property="og:type" content="website" />
  </DefaultHead>
)

export const basicPageQuery = graphql`
  query BasicPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        id
        title
        ...Blocks
        ...Seo
      }
    }
  }
`
