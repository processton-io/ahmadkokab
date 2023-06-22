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
          limit: 3
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
              }
            }
          }
        }
      }
    `,
  );
  return posts;
};
