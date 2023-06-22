import { useStaticQuery, graphql } from 'gatsby';
export const useForms = (formid = false) => {
  const {
    allMarkdownRemark: { edges: forms },
  } = useStaticQuery(
    graphql`
      query FormsQuery {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "form" } } }) {
          edges {
            node {
              id
              frontmatter {
                id
                title
                settings {
                  resolver
                  success_msg
                  event_id
                }
                rows {
                  position
                  fields {
                    type
                    input_type
                    name
                    autocomplete
                    label
                    required
                  }
                }
              }
            }
          }
        }
      }
    `,
  );
  return forms.map((item) => {
    return item.node.frontmatter
  });
};
