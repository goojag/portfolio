import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import "../static/scss/style.scss";

class Layout extends Component {
    render() {
        const { children, title="Rachan Maichom" } = this.props;
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                </Head>

                <Header />

                {children} 

                <Footer />
            </div>
        );
    }
}

export default Layout;   