// *************  Graphql  **********************


exports.createPages=async ({actions,graphql})=>{
  const {createPages}=actions;
  const result=await graphql(`{
    allContentfulElectronics {
      nodes {
        slug
        title
        discription {
          json
        }
      }
    }  
  }`)
  console.log(JSON.stringify(result))
}


// *************  Client route  **********************


// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions
  
//     // Only update the `/app` page.
//     if (page.path.match(/^\/product/)) {
//       // page.matchPath is a special key that's used for matching pages
//       // with corresponding routes only on the client.
//       page.matchPath = "/product/*"
  
//       // Update the page.
//       createPage(page)
//     }
//   }


// *************  Programatically route  **********************

// exports.createPages = async function ({ actions}) {

//     actions.createPage({
//         path: "my-dynamic-page",
//         component: require.resolve(`./src/templates/dynamic-page.jsx`),
//         context: { 
//             // Data passed to context is available
//             // in pageContext props of the template component
//             name: "Huzaifa Aslam",
//             disc:"Im React Developer"
//          },
//     });
//     console.log("End of Gatsby Node File");
// }