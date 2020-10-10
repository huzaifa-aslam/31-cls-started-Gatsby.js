import React from 'react'

const dynamicPage = ({pageContext}) => {
    return (
        <div>
            <h3>Im Huzaifa {pageContext.name}</h3>
            <h3>{pageContext.disc}</h3>
        </div>
    )
}

export default dynamicPage