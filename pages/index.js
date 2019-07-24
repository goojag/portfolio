import React, { Component } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="contain">
                    <div className="box-inner">
                        <div className="row">
                            <div className="col-md-7">
                               <section className="experience section-box">
                                   <h3><i className="far fa-address-card"></i><span>Experience</span></h3>
                                   <ul>
                                       <li>
                                            <h4>Frontend Web Designer</h4>
                                            <h5>Nation Multimedia Group Public Company Limited. (Feb 2016-Present)</h5>
                                            <div className="ex-text">
                                                - Designing webpage layout <br />
                                                - Updating websites <br />
                                                - Writing and editing content <br />
                                                - Develop new user-facing features <br />
                                                - Producing sample sites <br />
                                                - HTML CSS and Javascript <br />
                                                - Digital retouching and image editing <br />
                                                - Collaborate with other team members and stakeholders
                                            </div>
                                       </li>

                                       <li>
                                            <h4>Frontend Web Designer</h4>
                                            <h5>Kawna Broker (Seb2014 - Jan2015)</h5>
                                            <div className="ex-text">
                                                - Designing webpage layout <br />
                                                - Updating websites <br />
                                                - Writing and editing content <br />
                                                - Develop new user-facing features <br />
                                                - Producing sample sites <br />
                                                - HTML CSS and Javascript <br />
                                                - Digital retouching and image editing <br />
                                                - Collaborate with other team members and stakeholders
                                            </div>
                                       </li>

                                       <li>
                                            <h4>Frontend web designer (Freelance)</h4>
                                            <h5>BCJ-mudia.com (2014 - Present)</h5>
                                            <div className="ex-text">
                                                - Designing webpage layout <br />
                                                - Updating websites <br />
                                                - Writing and editing content <br />
                                                - Develop new user-facing features <br />
                                                - Producing sample sites <br />
                                                - HTML CSS and Javascript <br />
                                                - Digital retouching and image editing <br />
                                                - Collaborate with other team members and stakeholders
                                            </div>
                                       </li>
                                   </ul>
                                </section> 
                            </div>

                            <div className="col-md-5">
                                <section className="section-box edu-box">
                                    <h3><i className="fas fa-graduation-cap"></i><span>Education</span></h3>
                                    <h4>Bangkok Business College</h4>
                                    <h5>Majoring in Business computer</h5>
                                </section>

                                <section className="section-box">
                                    <h3><i className="far fa-lightbulb"></i><span>Skills</span></h3>
                                    <div className="list">
                                        <p>- My SQL, PHP, Codeigniter</p>
                                        <p>- Photoshop, Illustrator</p>
                                        <p>- React JS, Next JS, Node JS, Jquery</p>
                                        <p>- Version control</p>
                                        <p>- Fast learner and positive attitude in teamwork environment.</p>
                                    </div>
                                </section>

                                <section className="skills-icon">
                                    <div className="icon">
                                        <image src="" alt="" />
                                        <p></p>
                                    </div>
                                </section>
                            </div>
                        </div>{/* end .row */}
                    </div>{/* end .box-inner */}

                    <section className="design">
                        <div className="box-inner">
                        <ul>
                            <li><Link href=""><a><img src="/static/images/port/thumb_1.jpg" alt="" /></a></Link></li>
                            <li><Link href=""><a><img src="/static/images/port/thumb_2.jpg" alt="" /></a></Link></li>
                            <li><Link href=""><a><img src="/static/images/port/thumb_3.jpg" alt="" /></a></Link></li>
                            <li><Link href=""><a><img src="/static/images/port/thumb_4.jpg" alt="" /></a></Link></li>
                            <li><Link href=""><a><img src="/static/images/port/thumb_5.jpg" alt="" /></a></Link></li>
                            <li><Link href=""><a><img src="/static/images/port/thumb_6.jpg" alt="" /></a></Link></li>
                            <li><Link href=""><a><img src="/static/images/port/thumb_7.jpg" alt="" /></a></Link></li>
                            <li><Link href=""><a><img src="/static/images/port/thumb_8.jpg" alt="" /></a></Link></li>
                            {/* <li><Link href=""><a><img src="/static/images/port/thumb_9.jpg" alt="" /></a></Link></li> */}
                            <li><Link href=""><a><img src="/static/images/port/thumb_10.jpg" alt="" /></a></Link></li>
                        </ul>
                        </div>{/* end .box-inner */}
                    </section>{/* end .row */}
                </div>{/* end ..container */}
            </Layout>
        );
    }
}
 
export default Index;