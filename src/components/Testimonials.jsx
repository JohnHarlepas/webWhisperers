import React, { Component } from 'react';
import Icofont from 'react-icofont';
import OwlCarousel from "react-owl-carousel3";
import PropTypes from "prop-types";

class Testimonials extends Component {
  render() {
    //Testimonials loop start
    const testimonialsitem = this.props.testimonialsData.map((testimonials, index) => (
        <div className="single-testimonial-item text-center" key={index}>
            <Icofont icon="icofont-quote-left" />
            <p>{testimonials.Content}</p>

            <div className="client-profile">
                <img src={testimonials.clientImage} alt="client-one" />
            </div>
            
            <div className="client-info">
                <h3>{testimonials.Name}</h3>
                <span>{testimonials.Profession}</span>
            </div>
        </div>
    ));
    //Testimonials loop END
    return (
        <React.Fragment>
            <section className="testimonials ptb-100">
                <div className="container">
                    <OwlCarousel
                        className="owl-theme testimonial-slides"
                        items={1}
                        nav= {true}
                        dots= {false}
                        autoplay= {false}
                        loop= {true}
                        autoplayHoverPause= {true}
                        smartSpeed= {1000}
                        navText= {[
                            "<i class='icofont-arrow-left'></i>", 
                            "<i class='icofont-arrow-right'></i>"
                        ]}
                    >
                            {testimonialsitem}
                    </OwlCarousel>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
Testimonials.propTypes = {
    testimonialsData: PropTypes.array
};

//Default Props
Testimonials.defaultProps = { 
    testimonialsData: [
        {
            clientImage: require("../assets/img/johnSmall1.png"),
            Content: "Keep your mind forever focused on following your passion's north star and the winds of fortune will forever push you forward.",
            Name: "John D. Harlepas",
            Profession: "Founder & Tech Lead",
        },
        {
            clientImage: require("../assets/img/stephenSmall.png"),
            Content: "The glow of one happy, satisfied customer is to me worth more than money.",
            Name: "Stephen Peng",
            Profession: "Full Stack Web Developer",
        },
    ]
};

export default Testimonials;
