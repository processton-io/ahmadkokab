import { useStaticQuery, graphql } from 'gatsby';
export const useRecentArticles = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(
    graphql`
      query RecentArticlesQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "post" } } }
          limit: 10
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 120)
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                author
                photo {
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
              }
            }
          }
        }
      }
    `,
  );
  return posts;
};
