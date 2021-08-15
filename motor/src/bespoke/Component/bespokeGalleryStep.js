import classNames from "classnames";
import React, { Component } from "react";

var timeRecord;
export default class GalleryStep extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
    };
    timeRecord = setInterval(
      () =>
        this.setState(() => ({
          active: this.getNext(this.state.active),
        })),
      15000
    );
  }

  setRecorder() {
    timeRecord = setInterval(
      () =>
        this.setState(() => ({
          active: this.getNext(this.state.active),
        })),
      15000
    );
  }
  getNext(index) {
    console.log(index);
    index++;
    if (index >= this.props.galleries.length) index = 0;
    return index;
  }

  changeIndex(index) {
    for (var i = 0; i > this.props.galleries.length; i++) {
      document
        .getElementsByClassName("galleryStep-content")
        [i].classList.remove("active_content");
      document
        .getElementsByClassName("galleryStep-name")
        [i].classList.remove("active_name");
    }
    document
      .getElementsByClassName("galleryStep-content")
      [index].classList.add("active_content");
    document
      .getElementsByClassName("galleryStep-name")
      [index].classList.add("active_name");
    clearInterval(timeRecord);
    this.setState({
      active: index,
    });
    this.setRecorder();
  }

  render() {
    return (
      <>
        <div className="area-galleryStep">
          <div className="area-galleryStep-content">
            {this.props.galleries.map((gallery, index) => (
              <>
                <div
                  className={classNames("galleryStep-content", {
                    active_content: this.state.active == index,
                  })}
                >
                  <div className="galleryStep-content-con">
                    <div className="galleryStep-content-conPar1">
                      {gallery.para1}
                    </div>
                    <div className="galleryStep-content-conPar2">
                      {gallery.para2}
                    </div>
                  </div>
                  <div className="galleryStep-content-img">
                    <img
                      className="galleryStep-content-img"
                      src={gallery.image}
                      alt=""
                    ></img>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="area-galleryStep-name">
            {this.props.galleries.map((gallery, index) => (
              <>
                <div
                  onClick={() => this.changeIndex(index)}
                  className={classNames("galleryStep-name", {
                    active_name: this.state.active == index,
                  })}
                >
                  <div className="galleryStep-name-index">
                    <div className="galleryStep-name-change"></div>
                  </div>
                  <div className="gallery-name">
                    <span>0{index + 1}.</span>
                    <br />
                    {gallery.title}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}
