const dotenv=require('dotenv')
dotenv.config()

module.exports = {
    plugins: [
        `gatsby-plugin-material-ui`,   
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId:CONTENTFUL_SPACE_ID,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken:CONTENTFUL_ACCESS_TOKEN,
            },
          },
       

    ]
}