import React, { Component } from "react";
import classNames from "classnames";

export default class SlideImage extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
    };
  }

  getIndex(index) {
    this.setState({
      active: index,
    });
    //console.log(this.state);
  }

  render() {
    return (
      <>
        <div className="area-slideImg">
          <div className="slideImg">
            {this.props.listImg.map((img, index) => (
              <img
                className={classNames("img-slide", {
                  active_image: index == this.state.active,
                })}
                src={img}
                alt=""
              ></img>
            ))}
          </div>
          <div className="slideIndex">
            {this.props.listImg.map((img, index) => (
              <img
                className={classNames("img-index", {
                  active_image: this.state.active == index,
                })}
                src={img}
                alt=""
                onClick={() => this.getIndex(index)}
              ></img>
            ))}
          </div>
        </div>
      </>
    );
  }
}
