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
        "We are a group of experienced members of the business and programming world. Our goal is to provide each client with a product that raises their business's profile, while safeguarding their financial well-being. ",
        aboutsData: [
        {
            Icon: "icofont-win-trophy",
            title: "Competitive",
            content: "We want to provide our clients an experience that outmatches anyone elses in the web design industry. ",
        },
        {
            Icon: "icofont-tools-bag",
            title: "Resourceful",
            content: " By using multiple technologies, we can build websites that bring our clients more sales and notoriety.",
        },
        {
            Icon: "icofont-chart-histogram-alt",
            title: "Efficient",
            content: "We aim to complete projects before the deadline without the need for additional resources from our clients.",
        },
        {
            Icon: "icofont-light-bulb",
            title: "Experienced",
            content: "Our experiences have built a strong foundation where each project inspires our developers to generate new ideas.",
        },
        {
            Icon: "icofont-handshake-deal",
            title: "Committed",
            content: "We never fail to deliver a project, failing is not an option for us. We persevere so that our clients find success.",
        },
        {
            Icon: "icofont-transparent",
            title: "Transparent",
            content: " Honesty is a core pillar of our company. We strive for full transparency, hiding nothing from our clients.",
        },
    ]
};

export default About;
