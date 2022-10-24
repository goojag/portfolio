import React, { Component } from "react";
import Link from "next/link";


class Header extends Component {
    render() {
        return (
            <nav className="menu-top">
                {/* <Link activeclassName="active" href="/"><a>Profile</a></Link>
                <Link activeclassName="active" href="design"><a>Design</a></Link>
                <Link activeclassName="active" href="html"><a>HTML / CSS</a></Link>  */}
            </nav>
        )
    }
}

export default Header;