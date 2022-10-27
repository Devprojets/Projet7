import React, { Component } from "react";

export default class Rating extends Component {
    constructor(props) {
    super(props);
    this.state = {
        datas: this.props.datas,
    }
    };
    
    render() {
        const totalStar = 5;
        const rating = this.state.datas.map(ele => ele.rating);
        const percentage = (rating / totalStar) * 100;
        const percentageRounded = `${(Math.round(percentage / 10) * 10)}%`;

        return (
            <div className='ratings'>
                <div className="stars-outer">
                    <div className="stars-inner" style={{width: percentageRounded}}></div>   
                </div>
            </div>
        )
    }
}