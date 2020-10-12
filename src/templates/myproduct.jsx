import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const MyProduct = ({pageContext}) => {
    console.log(pageContext)
    const {itemDetails}=pageContext
    return (
        <div>
            <h1>This is {itemDetails.title}</h1>
            {documentToReactComponents(itemDetails.discription.json)}
        </div>
    )
}

export default MyProduct
