import React from 'react'

import './Banner.css'
import BannerImg from '../../../Asset/Banner.jpg'
import LogoLg from '../../../Asset/Logo Lg.png'

function Banner(){

    return(
        <main id='banner-container' >
            <img className='banner-image' src={BannerImg} alt = "Banner" />

            <div className='banner-title' >
                <img className='title-image' src={LogoLg} alt = "Logo" />
                <h1>Hunian Modern</h1>
                <h2>Bernuansa Villa</h2>
            </div>
            
            <div class="custom-shape-divider-bottom-1666473928">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

        </main>
    )
}

export default Banner;