import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import ScrollAnimation from 'react-animate-on-scroll';

class FunFacts extends Component {
    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };
  render() {
    return (
        <React.Fragment>
            <section className="fun-facts ptb-100">
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
                        <div className="col-lg-4 col-md-4">
                            <div className="count-box text-center">
                                <div className="glyph">
                                    <Icofont icon="icofont-people" />
                                   
                                </div>
                                <p>Percentage of Customers that Research Online before Visiting a Business</p>
                                <h2 className="counter">
                                <VisibilitySensor
                                    onChange={this.onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            this.state.didViewCountUp
                                                ? 80
                                                : 0
                                        }
                                        duration={5}
                                    />
                                </VisibilitySensor>
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="count-box text-center">
                                <div className="glyph">
                                    <Icofont icon="icofont-web" />
                                </div>
                                <p>Percentage of Small Businesses that have a Website</p>
                                <h2 className="counter">
                                <VisibilitySensor
                                    onChange={this.onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            this.state.didViewCountUp
                                                ? 64
                                                : 0
                                        }
                                        duration={5}
                                    />
                                </VisibilitySensor>
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="count-box text-center">
                                <div className="glyph">
                                    <Icofont icon="icofont-chart-histogram-alt" />
                                </div>
                                <p>Percentage of Customers that have Visited a Store Because of an Online Experience</p>
                                <h2 className="counter">
                                <VisibilitySensor
                                    onChange={this.onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            this.state.didViewCountUp
                                                ? 91
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                                </h2>
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
FunFacts.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string
};

//Default Props
FunFacts.defaultProps = {
    SectionbgTitle: "Fun Facts",
    sectionTitle: "Small Business Facts",
    sectionDescription:
        "Buckle-Up For Some Eye Opening Facts",
};

export default FunFacts;
