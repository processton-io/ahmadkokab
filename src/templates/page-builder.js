import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '../components/Head/DefaultHead'
import PageBuilder from '../Builders/PageBuilder'

const Page = ({ data }) => {
  
  return (
    <Layout nav={true}>
      <PageBuilder frontmatter={data.page.frontmatter} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Page

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
        breadcrumbs {
          breadcrumb_item {
            link
            title
          }
        }
        ...Blocks
        ...Seo
      }
    }
  }
`
