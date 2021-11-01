import React from 'react'

export default function Banner() {
    return (
        <div id="banner">
            <img src="./img/dragsterPage/header-banner-pcSize.webp" id="banner_image" alt="Dragster models" loading="lazy" />
            <div id="banner_content">
                <img src="./img/dragsterPage/header-banner-word.svg" id="banner_title" alt="Dragster" loading="lazy" />
                <div id="banner_explain">Born to impress</div>
            </div>
        </div>
    )
}
