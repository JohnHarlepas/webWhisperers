import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import { Accordion, AccordionItem } from "react-sanfona";
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


class FAQ extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="faq ptb-100">
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
                        <div className="faq-content">
                            <div className="row">
                                <div className="col-lg-4">
                                    
                                    <Link to={this.props.ContentLink}>
                                        <div className="content-box color-effect-1">
                                            <h3>{this.props.ContentTitle}</h3>

                                            <div className="box-icon-wrap box-icon-effect-1 box-icon-effect-1a">
                                                <div className="box-icon"><Icofont icon="icofont-share-alt" /></div>
                                            </div>

                                            <p>{this.props.ContentDescription}</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-lg-8">
                                    <Accordion
                                        rootTag="div"
                                        className="panel-group"
                                    >
                                        {this.props.faqData.map(item => {
                                            return (
                                                <AccordionItem
                                                    key={item}
                                                    title={item.title}
                                                    expanded={true}
                                                    expandedClassName=""
                                                    className="panel-title panel panel-default"
                                                    titleTag="a"
                                                    titleClassName=""
                                                >
                                                    <div>
                                                        <div className="panel-body">
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
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
FAQ.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    ContentLink: PropTypes.string,
    ContentTitle: PropTypes.string,
    ContentDescription: PropTypes.string,
    faqData: PropTypes.array
};

//Default Props
FAQ.defaultProps = {
    SectionbgTitle: "FAQ",
    sectionTitle: "Frequntly Asked Questions",
    sectionDescription:
        "If you have more questions, send us a message and we will answer you as soon as possible.",
    
    ContentTitle: "Frequently Asked Questions",
    ContentDescription: "If you have more questions, send us a message and we will answer you as soon as possible.",
    ContentLink: "/contact",

        faqData: [
        {
            title: "How to use our service?",
            description: "When arriving at an O-pass station, press the circle button on the machine to slip out a parking pass for you to take. Before leaving the parking premises, go to our website and navigate to the pay for parking section. Pay for parking and go to the front desk to exchange your old pass for a new one to put in the O-pass machine upon leaving",
        },
        {
            title: "What to do incase your pass is lost?",
            description: "Call 1-(800)-GET-PASS to speak with a representative. The representative will help you with processing a new parking transaction with O-Pass.",
        },
        {
            title: "How to reach O-Pass Support?",
            description: "Call the toll free number: 1-(800)-GET-PASS. Our service is 24/7",
        },
        {
            title: "Will O-Pass expand to parking garages outside of Arlington, Virginia? ",
            description: "Our vision is to expand nation-wide, but grand visions of expansion begin with small steps outside where the company first set root. Therefore we plan to expand to parts of Northern Virginia neighboring Arlington such as Reston and Southern Maryland in Gathersburg. We are also open to anyone who wishes to bring our services to another location, thus expanding our business to their area.",
        },
        {
            title: "Is there an expansion schedule?",
            description: "At the time of writing this in mid 2019, we have plans to expand our services to Reston by this year's end. Our plans for expansion to Southern Maryland will take place next year or later.",
        },
        {
            title: "What kind of payment options are available?",
            description: "Payment for the O-pass typically takes place online at ('place address of website here'). However, if the transaction cannot take place online for any reason, feel free to call our toll free number at 1-(800)-GET-PASS to complete the payment.",
        }
        
    ]
};

export default FAQ;
