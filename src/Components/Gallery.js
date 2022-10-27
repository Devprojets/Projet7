import React, { Component } from "react";

export default class Gallery extends Component {
    constructor(props) {
    super(props);
    this.state = {
        datas: this.props.datas,
        slideIndex: 0,
        arrayLength: this.props.datas.flatMap(el => el.pictures).length,
    }
    };

    showSlides = (n) => {
        const slides = this.state.datas.map(el => {
            return (el.pictures[n]);
        })
        return slides;
    };


    nextSlide = () => {
        this.setState({ slideIndex: this.state.slideIndex + 1 });
        if (this.state.slideIndex === this.state.arrayLength - 1) this.setState({ slideIndex: 0 });
    };

    previousSlide = () => {
        this.setState({ slideIndex: this.state.slideIndex - 1 });
        if (this.state.slideIndex < 1) this.setState({ slideIndex: this.state.arrayLength - 1 });
    };


    render() {
        return (
            <section className="gallery">
                <img className='gallery__image' src={this.showSlides(this.state.slideIndex)} alt="Intérieur du logement" />
                {this.state.arrayLength > 1 ?
                    <div>
                        <span className="gallery__arrow-left" onClick={this.previousSlide}>
                            <i className="fas fa-chevron-left fa-7x"></i>
                        </span>
                        <span className="gallery__arrow-right" onClick={this.nextSlide}>
                            <i className="fas fa-chevron-right fa-7x"></i>
                        </span>
                    </div> :
                    <div></div>
                }
            </section>
        );
    };
};


