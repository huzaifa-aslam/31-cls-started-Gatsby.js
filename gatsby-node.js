exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "my-dynamic-page",
        component: require.resolve(`./src/templates/dynamic-page.jsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Huzaifa Aslam",
            disc:"Im React Developer"
         },
    });
    console.log("End of Gatsby Node File");
}