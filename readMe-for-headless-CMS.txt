1-

create account on contentful.com https://www.contentful.com/

2-

under contentful.com crete organization

3-

then add Space

4-

open gatsby website enter Plugin tab

5- 

under Plugin search for gatsby-source-contentful and install plugin  npm install gatsby-source-contentful

6- back to contentful.com and click on content model tab

7-  create new content type

8- add feilds under content type
9- click on content and add text into your feilds and enter publish

10- copy API from gatsby-source-contentful plugin and paste into "gatsby-config.js" file under root directory of projectc

11- copy "spaceId" and "accessToken" from contentful.com 

12--http://localhost:8000/___graphql  // url for ___graphql

13- make a query

14- create a file "gatsby-node.js" in your directory if not exit

15- deine a function like this 

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
  console.log(result)
}


