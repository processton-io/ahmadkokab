import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '../components/Head/DefaultHead'
import PillarBuilder from '../Builders/PillarBuilder'

const Pillar = ({ data }) => {
  return (
    <Layout nav={true}  footer={false}>
      <PillarBuilder pillars={data.pillar.frontmatter.pillars} />
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
  <DefaultHead data={data.pillar.frontmatter.seo}>
    <meta id="type" property="og:type" content="website" />
  </DefaultHead>
)

export const basicPageQuery = graphql`
  query BasicPillar($id: String!) {
    pillar: markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        id
        title
        ...Pillars
        ...Seo
      }
    }
  }
`
