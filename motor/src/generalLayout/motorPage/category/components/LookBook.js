import React from 'react'

export default class LookBook extends React.Component{
    render(){
        return(
            <div id="slide3">
            <h2 id="slide3_title">LOOKBOOKS <span id="h2_sub">VIEW ALL</span></h2>
            <div id="wrap_slide3_card">
                <div class="slide3_card">
                    <img src="./img/category/slide3_1st.jpg" alt="T-shirt"/>
                    <div class="slide3_content">
                        <p class="slide3_name_card">Campaign</p>
                        <p class="slide3_level">LOGO LEVEL 1</p>
                    </div>
                </div>
                <div class="slide3_card">
                    <img src="./img/category/slide3_image2_1st.jpg" alt="Jacket"/>
                    <div class="slide3_content">
                        <p class="slide3_name_card">Campaign</p>
                        <p class="slide3_level">LOGO LEVEL 1</p>
                        <div class="card2_explain"><p>MV Agusta teams up with KALEYDOSCOPE to present "Metafisica Veloce"</p></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}