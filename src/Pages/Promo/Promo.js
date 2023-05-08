import React,{useEffect, useState} from "react";

import BannerImg from '../../Asset/Banner.jpg'

import poster1 from '../../Asset/Poster/1.jpg'
import poster2 from '../../Asset/Poster/2.jpg'
import poster3 from '../../Asset/Poster/3.jpg'
import poster4 from '../../Asset/Poster/4.jpg'
import poster5 from '../../Asset/Poster/5.jpg'
import poster6 from '../../Asset/Poster/6.jpg'

import './Promo.css'

function Promo(){
    const [isLoading, setLoading] = useState(true);

    // function someRequest() {
    //     //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    //     return new Promise((resolve) => setTimeout(() => resolve(), 3300));
    //   }

      
      useEffect(() => {
        // someRequest().then(() => {
        //   const loaderElement = document.querySelector('.loader-container');
        //   if (loaderElement) {
        //     loaderElement.remove();
        //     setLoading(!isLoading);
        //   }
        // });
        window.scroll(0,0)
      });
    
    //   if (isLoading) {
    //     //
    //     return null;
    //   }

    return(
        <main className="promo-container" >
            <main id='banner-container' >
            <img className='banner-image' src={BannerImg} alt = "Banner" />

            <div className='banner-title' >
                <h1>Promo</h1>
            </div>
            
            <div class="custom-shape-divider-bottom-1666473928">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

        </main>

        <section className='poster' style={{marginBottom: "100px"}} >

                <div className='poster-item' >
                    <img src={poster1} alt = "Promo" />
                </div>
                <div className='poster-item' >
                    <img src={poster2} alt = "Promo" />
                </div>
                <div className='poster-item' >
                    <img src={poster3} alt = "Promo" />
                </div>
                <div className='poster-item' >
                    <img src={poster4} alt = "Promo" />
                </div>
                <div className='poster-item' >
                    <img src={poster5} alt = "Promo" />
                </div>
                <div className='poster-item' >
                    <img src={poster6} alt = "Promo" />
                </div>

            </section>
            

            <footer>
                <h2>Copyright &#169; 2022 Bumi Cimanggis Indah. All rights reserved.</h2>
            </footer>

        </main>
    )

}

export default Promo;