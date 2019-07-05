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
            btnlink: "/#0",
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
            btnlink: "/#0",
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
            btnlink: "/#0",
        },
        
    ]
};
export default ItemTwo;
