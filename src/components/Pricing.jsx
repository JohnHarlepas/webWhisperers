import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

import ItemOne from "../components/pricingItem/ItemOne";
import ItemTwo from "../components/pricingItem/ItemTwo";

export class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="pricing" className="our-pricing ptb-100">
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
                            <div className="col-lg-12">
                                <div className="tab-slider">
                                    <Tabs defaultActiveKey="Atlantic" id="uncontrolled-tab">
                                        <Tab eventKey="Atlantic" title="Lump-Sum">
                                            {/* ItemOne Component from src/components/pricingItem/ItemOne */}
                                            <ItemOne />
                                        </Tab>
                                        <Tab eventKey="monthly" title="Monthly">
                                            {/* ItemOne Component from src/components/pricingItem/ItemTwo */}
                                            <ItemTwo />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Pricing.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Pricing.defaultProps = {
    SectionbgTitle: "Pricing",
    sectionTitle: "Pricing",
    sectionDescription:
        "We know that buying parking can be not only a inconvenience but also take a toll on your personal finances. So, we arranged a structured pricing system to give you options.",

};
export default Pricing
