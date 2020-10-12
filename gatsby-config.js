module.exports = {
    plugins: [
        `gatsby-plugin-material-ui`,   
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: `w94lmbjg9b7i`,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: '4BHm0DFV4iAZYVu3tCCKqtHLPYSxs-eZ4gjZ4n1PHns',
            },
          },
       

    ]
}