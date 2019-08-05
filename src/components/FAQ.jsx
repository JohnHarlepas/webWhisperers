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
    sectionTitle: "Frequently Asked Questions",
    sectionDescription:
        "If you have more questions, send us a message and we will answer you as soon as possible.",
    
    ContentTitle: "Frequently Asked Questions",
    ContentDescription: "If you have more questions, send us a message and we will answer you as soon as possible.",
    ContentLink: "/contact",

        faqData: [
            {
                title: "How to reach us?",
                description: "Feel free to call  (504) 434-5681 or email us at contact@webwhisperers.com. More information on reaching us can be found when you navigate to our “Contact” section via the navigation bar located at the top of the website or by scrolling to the very bottom of the website.",
            },
            {
                title: "What is the typical time frame for a website to be completed?",
                description: "There are several factors in determining the time it takes for a website to be fully functional and deployable ready. At Web Whisperers, we organize the amount of work we have to do by the number of sections we have to create for our client’s website. If the appraisal of the draft of the website is that each section takes approximately one day to complete, then we give a rough estimation of “# of sections x 1 day” for the amount of time it takes to complete a website. Of course, depending on the complexity, we will appraise for you the number of days it will take to complete specific sections. Additionally, expect a day or so to be attached onto that time frame for website aesthetics.",
            },
            {
                title: "Why choose Web Whisperers?",
                description: "Our attractiveness to individuals or corporations seeking to upgrade or begin a new website begin with the fact that our company is composed of talented and proven individuals who have the expertise in finishing and crafting projects to perfection on time. Additionally, with Web Whisperers, people who look to us for website design and development reap the benefits of substantial cost savings mostly absent in many counties and cities in the DC metropolitan area. With us, you will have secure peace of mind that your website is in the hands of qualified programmers looking to maximize your website’s aesthetics, functions, and features.",
            },
            {
                title: "I'm ready to get started, what is the next step?",
                description: "Please follow the instructions in the “Works” section of this website by navigating to it via the navigation bar located at the top of the website. You can also call (504) 434-5681  for additional consultation.",
            }
        
    ]
};

export default FAQ;
