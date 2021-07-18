import React, { Component } from 'react'
import NavMobile from './component/navMobile'
import './component/navMobile.css';

const navMB=[
    {
        nav:"OWNERSHIP",
        tags:[
            {name:"Buy your Mv",
             link:"buy-your-mv"
            },
            {name:"SPECIAL DEALS",
             link:"special-deals"
            },
            {name:"MV RIDE APP",
             link:"mv-ride-app"
            },
            {name:"SERVICE LOCATOR",
             link:"service-locator"
            },
            {name:"WARRANTY",
             link:"warranty"
            },
            {name:"MV CERTIFIED",
             link:""
            },
            {name:"ROAD ASSISTANCE",
             link:""
            }
        ]
    },
    {
        nav:"OUR BRAND",
        tags:[
            {name:"BUY YOUR MV",
             link:"buy-your-mv"
            },
            {name:"ABOUT US",
             link:"about-us"
            },
            {name:"HISTORY",
             link:"history"
            },
            {name:"DEALERS",
             link:""
            },
            {name:"RESEARCH CENTER",
             link:""
            },
            {name:"CONTACT US",
             link:"contact-us"
            }
        ]
    },
    {
        nav:"MV WORLD",
        tags:[
            {name:"MONACO DESIGN STUDIO",
             link:"monaco-design-studio"
            },
            {name:"NEWS",
             link:"news"
            }
        ]
    },
    {
        nav:"DEALERS",
        tags:[
            {name:"",
             link:""
            },
            {name:"",
             link:""
            }
        ]
    },
    {
        nav:"STORE",
        tags:[
            {name:"",
             link:""
            },
            {name:"",
             link:""
            }
        ]
    },

]

function closeMenuList(){
    document.getElementById("menu-list").style.width = "0";
    document.getElementById("menu-list").style.opacity = "0";
    document.getElementById("menu-list-top").classList.remove("closeBtChange");
    for (
      var i = 0;
      i < document.getElementsByClassName("menu-list-item").length;
      i++
    ) {
      document.getElementsByClassName("menu-list-item")[i].style.display="block";
      document.getElementsByClassName("fa-arrow-left")[i].style.display="none";
    }
    document.getElementById("menu-list-bottom").style.display = "none";
    document.getElementById("body").style.overflowY = "auto";
}



export default class NavMobileLayout extends Component {
    render(){
        return(
            <>
             <div className="menu-list" id="menu-list">
               <div className="menu-list-top" id="menu-list-top">
                 <p id="closeMenubutton" onClick={closeMenuList}>Close</p>
               </div>
               <NavMobile navMB={navMB}/>
             </div>
            </>
        )
    }
 }