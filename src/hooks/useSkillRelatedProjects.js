import { useStaticQuery, graphql } from 'gatsby';
export const useSkillRelatedProjects = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(
    graphql`
      query{
        allMarkdownRemark(
          filter: {frontmatter: {layout: {eq: "project-builder"}}}
          limit: 99
        ) {
          edges { 
            node {
              id
              excerpt(pruneLength: 120)
              fields {
                slug
              }
              frontmatter {
                layout
                skills
                permalink
                experience
                id
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
              }
            }
          }
        }
      }
    `,
  );
  return posts;
};
