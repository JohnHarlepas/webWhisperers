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
        "In our experience, clients come to us wanting to build a presence online to get more customers. Unfortunatley, the average cost of getting a website done by a professional is $2000 to $5000. This is a major hurdle for many small businesses. At Web Whisperers, our goal is to get our clients online for much less while providing them with beautiful and well functioning websites.",

    servicesData: [
        {
            icon: "icofont-hand-drag",
            heading: "Flexibility",
            description:
                "We offer multiple types of payment methods, ensuring clients have control."
        },
        {
            icon: "icofont-wall-clock",
            heading: "Convenience",
            description:
                "Our developers do all the work, while our clients focus on running their businesses."
        },
        {
            icon: "icofont-dollar-plus",
            heading: "Affordability",
            description:
                "Our websites are designed to bring value at at low cost for our clients."
        },
        
    ]
};

export default Services;
