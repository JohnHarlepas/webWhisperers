import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';

export class ItemThree extends Component {
    render() {
        //Start ItemOne Loop
        const itemthreedata = this.props.itemthreesData.map((itemthree, index) => (
            
            <div className={itemthree.className} key={index}>
                <div className={itemthree.FeaturedClass}>
                    <span className="featured">{itemthree.Featured}</span>
                </div>
                <div className="plan-price">
                    <h3>{itemthree.planName}</h3>
                    <span className="value">{itemthree.price}</span>
                    <span className="period">{itemthree.description}</span>
                </div>

                <div className="plan-features">
                    <ul>
                        <li>{itemthree.content1}</li>
                        <li>{itemthree.content2}</li>
                        <li>{itemthree.content3}</li>
                        <li>{itemthree.content4}</li>
                        <li>{itemthree.content5}</li>
                        <li>{itemthree.content6}</li>
                        <li>{itemthree.content7}</li>
                        <li>{itemthree.content8}</li>
                    </ul>
                    <div className="center-wrap">
                        <Link to={itemthree.btnlink} className="btn-a" rel="noopener noreferrer" target="_blank">
                            <div className="button">
                                {itemthree.BtnName}
                                <Icofont icon="icofont-long-arrow-right" />
                            <div className="mask" /></div>
                        </Link>

                        
                    </div>
                </div>
            </div>
            
        ));
        //End ItemThree Loop
        return (
        <React.Fragment>
            <div role="tabpanel" className="tab-pane fade show active" id="Atlantic">
                <div className="pricing-container margin-top-60">
                    {itemthreedata}           
                </div>
            </div>
        </React.Fragment>
        );
    }
}
ItemThree.PropsTypes = {
    itemthree: PropTypes.array
};
ItemThree.defaultProps = {
    itemthreesData: [
        {
            planName: "3 Months",
            className: "plan",
            description: "The amount you are charged to maintain your presence online",
            FeaturedClass: "",
            Featured: "",
            price: "$180",
            content1: "Update Content (not included)",
            content2: "Apply Modern Features",
            content3: "Update a Website's Front-End (not included)",
            content4: "Test Website's Mobile Responsiveness",
            content5: "Maintain Website's SSL Certificate",
            content6: "Provide Web Analytics (not included)",
            content7: "Create Backups and Test Their Reliability",
            BtnName: "Purchase Now",
            btnlink: "/ebay3",
        },
        {
            planName: "6 Months",
            className: "plan featured",
            description: "The amount you are charged to maintain your fully functional webpage",
            FeaturedClass: "listing-badges",
            Featured: "Featured",
            price: "$300",
            content1: "Update Content: Links, Images, etc.",
            content2: "Apply Modern Features",
            content3: "Update a Website's Front-End",
            content4: "Test Website's Mobile Responsiveness",
            content5: "Maintain Website's SSL Certificate",
            content6: "Provide Web Analytics",
            content7: "Create Backups and Test Their Reliability",
            // content7: "Enhanced Security",
            BtnName: "Purchase Now",
            btnlink: "/ebay",
        },
        {
            planName: "12 Months",
            className: "plan",
            description: "The amount you are charged to maintain E-Commerce website",
            FeaturedClass: "",
            Featured: "",
            price: "$480",
            content1: "Update Content: Links, Images, etc.",
            content2: "Apply Modern Features",
            content3: "Update a Website's Front-End",
            content4: "Test Website's Mobile Responsiveness",
            content5: "Maintain Website's SSL Certificate",
            content6: "Provide Web Analytics",
            content7: "Create Backups and Test Their Reliability",
            BtnName: "Purchase Now",
            btnlink: "/ebay",
        },
        
    ]
};
export default ItemThree;
