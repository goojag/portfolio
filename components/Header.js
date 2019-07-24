import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="box-inner">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-border">
                                <div className="profile-img"><img src="/static/images/profile.jpg" alt="" /></div>
                                <h4>Rachan Maichom</h4>
                                <p>Frontend Web Designer</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <section className="top-detail">
                                <h2>I am enjoy to work as a website designer and capable to achieve the target beyond company</h2>
                                <p><span>Address</span><span>19/4  baanmai village, kubon 28, Ramintra,
                                        kannayao, bangkok 10230 </span></p>
                                <p><span>Telephone</span><span>088-690-8050 </span></p>
                                <p><span>Email adress</span><span>rachan.jack@gmail.com </span></p>
                                <p><span>Birth date </span><span>13 jan 1981 </span></p>
                                <p><span>Nationality</span><span>thai</span></p>
                                <p><span>Age</span><span>38 </span></p>
                                <p><span>Marital status 	</span><span>single</span></p>
                                <p><span>Expected salary </span><span></span></p>
                            </section>
                        </div>
                    </div>{/* end .row */}
                    
                </div>
            </header>
        )
    }
}

export default Header;