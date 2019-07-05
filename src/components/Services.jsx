import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component {
  render() {
      //Service loop start
      const servicedata = this.props.servicesData.map((service, index) => (
        <div className="col-md-6 col-lg-4 text-center" key={index}>
            <div className="service-item">
                <div className="glyph">
                    <Icofont icon={service.icon} />
                </div>
                <h3>{service.heading}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    ));
    //Service loop END
    return (
        <React.Fragment>
            <section id="services" className="services ptb-100">
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
                        {servicedata}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
Services.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    SectionbgTitle: "Service",
    sectionTitle: "Why use this service?",
    sectionDescription:
        "This is a way to get around the hassle of waiting in line to pay your parking ticket at kiosks or at the gate, we are offering the convenience of pre paying your parking ticket on your mobile device before you leave. We all know the line to get out can get backed up very frequently, this is more efficient and can save everyone some time.",

    servicesData: [
        {
            icon: "icofont-refresh",
            heading: "Flexibility",
            description:
                "We want to give you the option of flexibility, waiting in line can be annoying. Why wait?"
        },
        {
            icon: "icofont-wall-clock",
            heading: "Time Saving",
            description:
                "You could already be on the road home, but you're still in line. We can change that."
        },
        {
            icon: "icofont-support",
            heading: "Support",
            description:
                "We will always tend to the needs of our customers, contact us any time."
        },
        
    ]
};

export default Services;
