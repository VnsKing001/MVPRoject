import React, { Component } from "react";

function backToMenu(index) {
  console.log(index);
  for (
    var i = 0;
    i < document.getElementsByClassName("menu-list-item").length;
    i++
  ) {
    document
      .getElementsByClassName("menu-list-item")
      [i].classList.remove("type-chosen");
    document.getElementsByClassName("menu-list-item")[i].style.display =
      "block";
  }
  document.getElementsByClassName("fa-arrow-left")[index].style.display =
    "none";
  document.getElementById("menu-list-top").classList.remove("closeBtChange");
}

export default class NavMb extends Component {
  render() {
    const navMB = this.props.navMB;
    return (
      <>
        <div className="menu-list-bottom" id="menu-list-bottom">
          {navMB.map((itemNav, index) => (
            <>
              <div className="menu-list-item">
                <div className="title-menu">{itemNav.nav}</div>
                <div className="area-button-back" id="area-button-back">
                  <i
                    class="fas fa-arrow-left"
                    id="fa-arrow-left"
                    onClick={() => backToMenu(index)}
                  ></i>
                </div>
                <div className="area-list-drop" id="area-list-drop">
                  {itemNav.tags.map((tag) => (
                    <a className="menu-list-item-drop" href={tag.link}>
                      {tag.name}
                    </a>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}
