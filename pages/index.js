import React, { Component } from "react"
import Layout from "../components/Layout"

class Index extends Component {
    render() {
        return (
            <Layout>
                <header>
                    <div className="box-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="box-border">
                                    <div className="profile-img"><img src="/assets/images/profile.jpg" alt="" /></div>
                                    <h4>Rachan Maichom</h4>
                                    <p>Frontend Web Designer</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <section className="top-detail">
                                    <h2>I am enjoy to work as a website designer and capable to achieve the target beyond company</h2>
                                    <p><span>Address</span><span>99/92 Patreeda Avenue Pathumtani 2 Village, Krachaeng, Sam Khok, Pathum Thani 12160</span></p>
                                    <p><span>Telephone</span><span>062-403-4045 </span></p>
                                    <p><span>Email adress</span><span>rachan.jack@gmail.com </span></p>
                                    <p><span>Birth date </span><span>13 Jan 1981 </span></p>
                                    <p><span>Nationality</span><span>Thai</span></p>
                                    <p><span>Age</span><span>41 </span></p>
                                    <p><span>Marital status 	</span><span>Single</span></p>
                                </section>
                            </div>
                        </div>{/* end .row */}
                    </div>
                </header>
                <div className="contain">
                    <section className="experience section-box">
                        <div className="box-inner">
                        <h3><span>Experience</span></h3>
                        <ul>

                            <li>
                                <h4>Senior Frontend Web developer</h4>
                                <h5>Amarin Television (October 2020 - Present)</h5>
                                <div className="ex-text">
                                    - Updating websites <br />
                                    - Writing and editing content <br />
                                    - Develop new user-facing features <br />
                                    - Producing sample sites <br />
                                    - HTML CSS and Javascript <br />
                                    - Digital retouching and image editing <br/>
                                    - Ads
                                </div>
                            </li>

                            <li>
                                <h4>Frontend web developer</h4>
                                <h5>Nation Multimedia Group Public Company Limited. (Feb 2016-May 2020)</h5>
                                <div className="ex-text">
                                    - Designing webpage layout <br />
                                    - Updating websites <br />
                                    - Writing and editing content <br />
                                    - Develop new user-facing features <br />
                                    - Producing sample sites <br />
                                    - HTML CSS and Javascript <br />
                                    - Digital retouching and image editing 
                                </div>
                            </li>

                            <li>
                                <h4>Frontend web designer and Web UX/UI designer (Freelance)</h4>
                                <h5>BCJ-mudia.com (2014 - Present)</h5>
                                <div className="ex-text">
                                    - UX/UI Designing webpage layout <br />
                                    - UX/UI Designing application layout <br />
                                    - Updating websites <br />
                                    - Writing and editing content <br />
                                    - Develop new user-facing features <br />
                                    - Producing sample sites <br />
                                    - HTML CSS and Javascript <br />
                                    - Digital retouching and image editing 
                                </div>
                            </li>
                        </ul>
                        </div>
                        {/* end .box-inner */}
                    </section>


                    <section className="section-box skills-list">
                        <div className="box-inner">
                            {/* <h3><span>Skills</span></h3> */}
                            <ul className="list">
                                <li>
                                    <p>Adobe XD</p>
                                    <p>Figma</p>
                                    <p>Photoshop</p>
                                    <p>Illustrator</p>
                                </li>

                                <li>
                                    <p>React JS</p>
                                    <p>Next JS</p>
                                    <p>PHP</p>
                                    <p>My SQL</p>
                                </li>
                                
                                
                                <li>
                                    <p>HTML5</p>
                                    <p>SCSS</p>
                                    <p>CSS3</p>
                                    <p>Javascript</p>
                                </li>
                                {/* <li>Fast learner and positive attitude in teamwork environment.</li> */}
                            </ul>

                            {/* <Skills>test</Skills> */}

                            {/* <section className="skills-icon">
                                <div className="icon icon1">
                                    <img src="/assets/images/i-psd.jpg" alt="" />
                                    <p>Photoshop</p>
                                </div>
                                <div className="icon icon2" >
                                    <img src="/assets/images/i-ai.jpg" alt="" />
                                    <p>Illustrator</p>
                                </div>
                                <div className="icon icon3">
                                    <img src="/assets/images/i-code.jpg" alt="" />
                                    <p>Codding</p>
                                </div>
                            </section> */}
                        </div>
                        {/* end .box-inner */}
                    </section>

                    <section className="design-port">
                        <div className="box-inner">

                        </div>{/* end .box-inner */}
                    </section>

                    <section className="port-link"> 
                        <div className="box-inner">
                            <ul>
                                <li><a target="_blank" rel="noreferrer" href="http://amarintv.com">Amarin TV</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://komchadluek.net">Komchadluek</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.bangkokbiznews.com">Bangkokbiznews</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://renovate.boonthavorn.com/">Renovate Boonthavorn</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.thansettakij.com">Thansettakij</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://bcj-media.com/html/NBC">NBC</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://bcj-media.com/html/boi2019">BOI</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://bcj-media.com/html/suthichai2">Sutthichai Yoon</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://bcj-media.com/html/ppmedicare/">PP Medicare</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://bcj-media.com/html/property-perfect">Property perfect</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.nationthailand.com">Nation Thailand</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.jesseandson.com/">Jesse and Son</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://bcj-media.com/html/philiplife">Philiplife</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://bcj-media.com/html/srw">SRW</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://koratzoo-edu.org/">Korat Zoo</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://bcj-media.com/html/holiday-palace">Holiday Palace</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://bcj-media.com/html/tangko2021/">Tangko</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.vinythai.co.th/th/home/">Viny Thai</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.inside2home.com/">Inside2home</a></li>
                                <li><a target="_blank" rel="noreferrer" href="http://www.pbtabien.com/">PB Tabien</a></li>
                            </ul>
                        </div>{/* end .box-inner */}
                    </section>

                </div>{/* end ..contain */}
            </Layout>
        )
    }
}
 
export default Index;