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
            planName: "First Hour",
            className: "plan",
            description: "The amount you are charged before your first hour",
            FeaturedClass: "",
            Featured: "",
            price: "$7",
            content1: "Any available space",
            content2: "Applies only for the day it is brought",
            content3: "Easily Transferable",
            content4: "500 Car Capacity",
            BtnName: "Purchase Now",
            btnlink: "/ebay3",
        },
        {
            planName: "Validated",
            className: "plan featured",
            description: "One time special price for George Washignton students",
            FeaturedClass: "listing-badges",
            Featured: "Featured",
            price: "$3",
            content1: "Any available space",
            content2: "Applies only for the day it is brought",
            content3: "Easily Transferable",
            content4: "500 Car Capacity",
            // content5: "Weekly Backups",
            // content6: "15 Domain Names",
            // content7: "Enhanced Security",
            BtnName: "Purchase Now",
            btnlink: "/ebay",
        },
        {
            planName: "All Day",
            className: "plan",
            description: "The amount you are charged after your first hour",
            FeaturedClass: "",
            Featured: "",
            price: "$17",
            content1: "Any available space",
            content2: "Applies only for the day it is brought",
            content3: "Easily Transferable",
            content4: "500 Car Capacity",
            BtnName: "Purchase Now",
            btnlink: "/ebay2",
        },
        
    ]
};
export default ItemOne;
