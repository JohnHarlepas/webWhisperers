import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
// you need to uncomment code below if you want to use social media links using the original method
// import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <p className="copyright">{this.props.copyrightText}</p>
                            </div>
                            <div className="col-md-7">
                                <div className="social-icons bottom">
                                    <ul className="list-inline">
                                        <li>{this.props.socialTitle} </li>
                                        {/* <li><Link to={this.props.FacebookLink}><Icofont icon="icofont-facebook" /></Link></li>
                                        <li><Link to={this.props.TwitterLink}><Icofont icon="icofont-twitter" /></Link></li>
                                        <li><Link to={this.props.InstagramLink}><Icofont icon="icofont-instagram" /></Link></li>
                                        <li><Link to={this.props.linkedinLink}><Icofont icon="icofont-linkedin" /></Link></li>  */}
                                        {/* this code below allows you to connect to external link without having to create a new route for it. Instead, you write the below code, for whatever
                                        link you want, then you go all the way down to line 53 and use "// (place link here) //"  */}
                                        <li><a href={this.props.FacebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" /></a></li>
                                        <li><a href={this.props.TwitterLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-twitter" /></a></li>
                                        <li><a href={this.props.InstagramLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-instagram" /></a></li>
                                        {/* <li><a href={this.props.linkedinLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-linkedin" /></a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
//Props Types
Footer.propTypes = {
    copyrightText: PropTypes.string,
    FacebookLink: PropTypes.string,
    TwitterLink: PropTypes.string,
    InstagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
};

//Default Props
Footer.defaultProps = {
    copyrightText: "2019 © All Rights Reserved.",
    socialTitle: "Follow Us On:",
    FacebookLink: "//facebook.com/Web-Whisperers-380083106037783/?modal=admin_todo_tour/",
    TwitterLink: "//twitter.com/web_whisperers",
    InstagramLink: "//instagram.com/webwhisperers",
    // linkedinLink: "//linkedin.com//",

};
export default Footer;
