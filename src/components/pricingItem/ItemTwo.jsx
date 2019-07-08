import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';

export class ItemTwo extends Component {
    render() {
        //Start ItemTwo Loop
        const itemtwodata = this.props.itemtwosData.map((itemtwo, index) => (
            
            <div className={itemtwo.className} key={index}>
                <div className={itemtwo.FeaturedClass}>
                    <span className="featured">{itemtwo.Featured}</span>
                </div>
                <div className="plan-price">
                    <h3>{itemtwo.planName}</h3>
                    <span className="value">{itemtwo.price}</span>
                    <span className="period">{itemtwo.description}</span>
                </div>

                <div className="plan-features">
                    <ul>
                        <li>{itemtwo.content1}</li>
                        <li>{itemtwo.content2}</li>
                        <li>{itemtwo.content3}</li>
                        <li>{itemtwo.content4}</li>
                        <li>{itemtwo.content5}</li>
                        <li>{itemtwo.content6}</li>
                        <li>{itemtwo.content7}</li>
                        <li>{itemtwo.content8}</li>
                    </ul>
                    <div className="center-wrap">
                        <Link to={itemtwo.btnlink} className="btn-a">
                            <div className="button">
                                {itemtwo.BtnName}
                                <Icofont icon="icofont-long-arrow-right" />
                            <div className="mask" /></div>
                        </Link>
                    </div>
                </div>
            </div>
            
        ));
        //End ItemTwo Loop
        return (
        <React.Fragment>
            <div role="tabpanel" className="tab-pane fade show active" id="monthly">
                <div className="pricing-container margin-top-60">
                    {itemtwodata}           
                </div>
            </div>
        </React.Fragment>
        );
    }
}
ItemTwo.PropsTypes = {
    itemtwosData: PropTypes.array
};
ItemTwo.defaultProps = {
    itemtwosData: [
        {
            planName: "Starter",
            className: "plan",
            description: "The amount you are charged to get a presence online",
            FeaturedClass: "",
            Featured: "",
            price: "$50",
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
            price: "$80",
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
            price: "$160",
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
export default ItemTwo;
