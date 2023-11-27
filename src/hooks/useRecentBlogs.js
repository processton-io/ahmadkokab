import { useStaticQuery, graphql } from 'gatsby';
export const useRecentBlogs = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(
    graphql`
      query RecentArticlesQuery {
        allMarkdownRemark(
          filter: {frontmatter: {layout: {eq: "blog-builder"}}}
          sort: { frontmatter: { date: DESC } }
          limit: 10
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                id
                layout
                permalink
                type
                title
                photo {
                  alt
                  image {
                    childImageSharp {
                      gatsbyImageData(
                        width: 800
                        quality: 72
                        placeholder: DOMINANT_COLOR
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
                excerpt
              }
            }
          }
        }
      }
    `,
  );
  return posts;
};
