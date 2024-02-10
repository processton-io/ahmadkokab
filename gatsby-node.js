const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');


exports.createPages = async  ({ actions, graphql }) => {
  const { createPage , createSlice} = actions;

  const postsPerPage = 12
  
  createPage({
      path: '/skills',
      component: path.resolve("./src/templates/skills-list-template.js"),
      context: {
        
      },
  })

  const tipsResults = await graphql(
    `
      {
        allMarkdownRemark(filter: {frontmatter: {layout: {eq: "tip-builder"}}}) {
          totalCount
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
                code {
                  lang
                }
                skills
              }
            }
          }
        }
      }
    `
  )
  if (tipsResults.errors) {
    reporter.panicOnBuild(`Error while running Skills query.`)
    return
  }

  const tipsPages = Math.ceil(tipsResults.data.allMarkdownRemark.totalCount / postsPerPage)
  Array.from({ length: tipsPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/tips` : `/tips/${i + 1}`,
      component: path.resolve("./src/templates/tip-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        tipsPages,
        currentPage: i + 1,
      },
    })
  })

  tipsResults.data.allMarkdownRemark.edges.forEach((edge) => {

    const id = edge.node.id;
    let pathName = edge.node.frontmatter.permalink || edge.node.fields.slug;
    let component = path.resolve(
      `src/templates/${String(edge.node.frontmatter.layout)}.js`,
    );
    let skillids = [];
    edge.node.frontmatter.skills.forEach((skill) => {
      skillids.push(skill)
    })
    
    createPage({
      path: pathName,
      component,
      context: {
        id,
        skillids: skillids
      },
    });
    console.log("Page Created"+ pathName)
  })



  const blogResults = await graphql(
    `
      {
        allMarkdownRemark(filter: {frontmatter: {layout: {eq: "blog-builder"}}}) {
          totalCount
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )
  if (blogResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPages = Math.ceil(blogResults.data.allMarkdownRemark.totalCount / postsPerPage)
  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        blogPages,
        currentPage: i + 1,
      },
    })
  })

  const storyResults = await graphql(
    `
      {
        allMarkdownRemark(filter: {frontmatter: {layout: {eq: "story-builder"}}}) {
          totalCount
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )
  if (storyResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const storyPages = Math.ceil(storyResults.data.allMarkdownRemark.totalCount / postsPerPage)
  Array.from({ length: storyPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/stories` : `/stories/${i + 1}`,
      component: path.resolve("./src/templates/sotires-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        storyPages,
        currentPage: i + 1,
      },
    })
  })



  return graphql(`
    {
      allMarkdownRemark(limit: 3000, filter: {frontmatter: {layout: { nin: ["hidden", null, "tip-builder"] }}}) {
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
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      console.log('errors', results.errors);
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const postOrPage = result.data.allMarkdownRemark.edges.filter((edge) => {
      let layout = edge.node.frontmatter.layout;
      const excludes = [null, 'hidden', 'Category'];
      return excludes.indexOf(layout) === -1 ? true : false;
    });

    postOrPage.forEach((edge) => {
      const id = edge.node.id;
      let pathName = edge.node.frontmatter.permalink || edge.node.fields.slug;
      let component = path.resolve(
        `src/templates/${String(edge.node.frontmatter.layout)}.js`,
      );

      if (fs.existsSync(component)) {
        createPage({
          path: pathName,
          component,
          context: {
            id,
          },
        });
      }
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);
  if (page.path !== oldPage.path) {
    deletePage(oldPage);
    createPage(page);
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
      },
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const defs = `
  type MarkdownRemarkFrontmatterSeo @infer {
    title: String
    description: String
    image: File
  }`;
  createTypes(defs);
};

