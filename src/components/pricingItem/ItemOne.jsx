import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';

export class ItemOne extends Component {
    render() {
        //Start ItemOne Loop
        const itemonedata = this.props.itemonesData.map((itemone, index) => (
            
            <div className={itemone.className} key={index}>
                <div className={itemone.FeaturedClass}>
                    <span className="featured">{itemone.Featured}</span>
                </div>
                <div className="plan-price">
                    <h3>{itemone.planName}</h3>
                    <span className="value">{itemone.price}</span>
                    <span className="period">{itemone.description}</span>
                </div>

                <div className="plan-features">
                    <ul>
                        <li>{itemone.content1}</li>
                        <li>{itemone.content2}</li>
                        <li>{itemone.content3}</li>
                        <li>{itemone.content4}</li>
                        <li>{itemone.content5}</li>
                        <li>{itemone.content6}</li>
                        <li>{itemone.content7}</li>
                        <li>{itemone.content8}</li>
                    </ul>
                    <div className="center-wrap">
                        <Link to={itemone.btnlink} className="btn-a" rel="noopener noreferrer" target="_blank">
                            <div className="button">
                                {itemone.BtnName}
                                <Icofont icon="icofont-long-arrow-right" />
                            <div className="mask" /></div>
                        </Link>
                    </div>
                </div>
            </div>
            
        ));
        //End ItemOne Loop
        return (
        <React.Fragment>
            <div role="tabpanel" className="tab-pane fade show active" id="Atlantic">
                <div className="pricing-container margin-top-60">
                    {itemonedata}           
                </div>
            </div>
        </React.Fragment>
        );
    }
}
ItemOne.PropsTypes = {
    itemonesData: PropTypes.array
};
ItemOne.defaultProps = {
    itemonesData: [
        {
            planName: "Starter",
            className: "plan",
            description: "The amount you are charged to get a presence online",
            FeaturedClass: "",
            Featured: "",
            price: "$250",
            content1: "Establishing Domain",
            content2: "Hosting the Website",
            content3: "Launching Template (not provided)",
            content4: "Securing Security Certificate",
            content5: "Applying Git Compatibility",
            content6: "No Pages",
            BtnName: "Purchase Now",
            btnlink: "/ebay3",
        },
        {
            planName: "Professional",
            className: "plan featured",
            description: "The amount you are charged to get a fully functional webpage",
            FeaturedClass: "listing-badges",
            Featured: "Featured",
            price: "$500",
            content1: "Services Provided in Starter Plan",
            content2: "Customizing Website to Your Specifications",
            content3: "Attaching Your Media Files to Website",
            content4: "Activating Back-End Functionality",
            content5: "Facilitating Client to User Communication",
            content6: "Limited to only 5 Pages Per Project",
            // content7: "Enhanced Security",
            BtnName: "Purchase Now",
            btnlink: "/ebay",
        },
        {
            planName: "E-Commerce",
            className: "plan",
            description: "The amount you are charged to get fully functional E-Commerce website",
            FeaturedClass: "",
            Featured: "",
            price: "$1000",
            content1: "Services Provided in Starter Plan",
            content2: "Services provided in Professional Plan",
            content3: "Integrating Payment Processing Mechanism",
            content4: "Industry Specific Customizations",
            content5: "Unlimited Pages",
            // content7: "Enhanced Security",
            BtnName: "Purchase Now",
            btnlink: "/ebay",
        },
        
    ]
};
export default ItemOne;
