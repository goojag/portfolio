import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="box-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="menu-foot">
                                <Link href=""><a>Home</a></Link>
                                <Link href=""><a>Portfolio</a></Link>
                            </nav>
                        </div>
                        {/* <div className="col-md-6"><span className="copyright">Copyright © 2019 RachanDesign - All Rights Reserved</span></div> */}
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;