import React from 'react'
import { Router } from '@reach/router'
import Layout from './../components/Layout'
import Main from './../components/Main'
import ProductOne from './../components/ProductOne'
import ProductTwo from './../components/ProductTwo'
import { Link } from 'gatsby'
import style from './product.module.css'


const App = () => {
    return (
        <Layout>
            <div className={style.navbar}>
                <Link to="/product/product1">Product One</Link>
                <Link to="/product/product2">Product Two</Link>
            </div>
            <Router basepath="/product">
                <ProductOne path="/product1" />
                <ProductTwo path="/product2" />

                <Main path="/" />
            </Router>

        </Layout>
    )
}

export default App
