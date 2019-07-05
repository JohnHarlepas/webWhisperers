import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
    render() {
        //About loop start
        const aboutdata = this.props.aboutsData.map((about, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="about-info">
                    <Icofont icon={about.Icon} />
                    <h3>{about.title}</h3>
                    <p>{about.content}</p>
                </div>
            </div>
        ));
        //About loop END
        return (
            <React.Fragment>
                <section id="about" className="about-us ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row">
                        {aboutdata}
                    </div>
                </div>
            </section>   
            </React.Fragment>
        );
    }
}
//Props Types
About.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
    SectionbgTitle: "About",
    sectionTitle: "About Us",
    sectionDescription:
        "We are John Harlepas, John Druhan, Steven Peng, and Patrick Ellis. We're just a rag-tag group of fullstack developers looking to solve issues, create new things, and jump forward in this new world of coding. ",
        aboutsData: [
        {
            Icon: "icofont-climbing",
            title: "Ambition",
            content: "We are ambitious with all the work we do, and cannot wait to extend our talents above and beyond. ",
        },
        {
            Icon: "icofont-tools-bag",
            title: "Resourceful",
            content: "Resources are key to a developers tool belt, we utilize multiple technologies and packages to bring our creations alive.",
        },
        {
            Icon: "icofont-chart-histogram-alt",
            title: "Efficient",
            content: "Getting things done before or by the deadline always guarantees happy customers/clients, is what we aim for.",
        },
        {
            Icon: "icofont-brainstorming",
            title: "Experience",
            content: "Our experience is constantly growing and the opportunities are endless. Every project resonates ideas for the next.",
        },
        {
            Icon: "icofont-handshake-deal",
            title: "Commitment",
            content: "We are committed to every part of every project we do, nothing is an exception. We persevere for success.",
        },
        {
            Icon: "icofont-transparent",
            title: "Transparent",
            content: "We have nothing to hide, we are up front with everything we create. Honesty is always the best policy.",
        },
    ]
};

export default About;
