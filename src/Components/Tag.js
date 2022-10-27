import React, { Component } from "react";

export default class Tag extends Component {
    constructor(props) {
    super(props);
    this.state = {
        datas: this.props.datas,
    }
    };

    render() {
        return (
            <>
                {this.state.datas.map(function(ele) {
                    return (
                        <div key={ele.id} className="tags">
                            {ele.tags.map((e, index) => {
                            return <p key={index} className="tags__item">{e}</p>
                            })}
                        </div>
                    )
                })}
            </>
        )
    }
}