import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";

class BannerOne extends Component {
    render() {
        //BannerOne loop start
        const banneronedata = this.props.banneronesData.map(
            (bannerone, index) => (
                <div className={bannerone.BgClass} key={index}>
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <span
                                                className={
                                                    isVisible
                                                        ? "hero-text animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.TopTitle}
                                            </span>

                                            <h1
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.Title}
                                            </h1>
                                            <p
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.Content}
                                            </p>
                                            <div className="center-wrap">
                                                <Link to={bannerone.BtnLink} className="btn-a">
                                                    <div className="button">
                                                        {bannerone.BtnName}
                                                        <Icofont icon="icofont-long-arrow-right" />
                                                    <div className="mask" /></div>
                                                </Link>

                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            )
        );
        //BannerOne loop END
        
        //Thumbs loop Start
        const thumbdata = this.props.thumbsData.map((thumb, index) => (
            <div className="owl-thumb-item" key={index}>
                <Icofont icon={thumb.ThumbIcon} />
                <h3>{thumb.ThumbTitle}</h3>
                <p>{thumb.ThumbContent}</p>
            </div>
            )
        );
        //Thumbs loop END
        return (
            <React.Fragment>
                <div id="home" className="hompage-slides-wrapper">
                    <OwlCarousel
                        className="owl-theme homepage-slides"
                        items={1}
                        touchDrag={false}
                        margin={0}
                        mouseDrag={false}
                        smartSpeed={1000}
                        dotData={true}
                        dotsContainer={".owl-thumbs"}
                    >
                        {banneronedata}
                    </OwlCarousel>

                    <div className="owl-thumbs">
                        {thumbdata}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
//Props Types
BannerOne.propTypes = {
    banneronesData: PropTypes.array,
    thumbsData: PropTypes.array
};

//Default Props
BannerOne.defaultProps = {
    banneronesData: [
        {
            BgClass: "single-slider-item slide-bg-1",
            // the pictures for the bannner are found in the style.css under the class name slide-bg-1
            TopTitle: "Safe & Secure",
            Title: "Fully Automated System",
            Content:
                "Exit parking garbages without having to pay at the terminals or gates, preventing accidents and loss of time.",
            BtnLink:  "/works",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item slide-bg-2",
            TopTitle: "Innovative & Unique",
            Title: "Dynamic User Interaction",
            Content:
                "Exhaustive customer research was used to create a set of features that assure ease of use and optimal convenience.",
            BtnLink:  "/works",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item slide-bg-3",
            TopTitle: "Reliable & Stress Free",
            Title: "Knowledgeable Industry Leadership",
            Content:
                "Ending the practice of leaving customers adrift without clear and absolute support.",
            BtnLink:  "/works",
            BtnName: "get started"
        }
    ],
    thumbsData: [
        {
            ThumbIcon: "icofont-rocket-alt-1",
            ThumbTitle: "Adaptive Technology",
            ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "icofont-box",
            ThumbTitle: "Unique Features",
            ThumbContent: "We incorporate a series uniqiue benefits to secure complete customer satisfaction.",
        },
        {
            ThumbIcon: "icofont-live-support",
            ThumbTitle: "Reliable Support",
            ThumbContent: "We embrace a customer-centric culture, where resources are utilized to maintain our brand quality.",
        },
    ]
};

export default BannerOne;
