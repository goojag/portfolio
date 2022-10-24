import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
    render() {
        const { 
            children, 
            title="Rachan Maichom", 
        } = this.props;
        return (
            <div className="main">
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <script src="/assets/js/jquery-3.4.1.min.js"></script>
                    <script src="/assets/js/main.js"></script>
                </Head>

                <Header />

                {children} 

                <Footer />
            </div>
        );
    }
}

export default Layout;   