import React, {useState, useEffect} from "react";
import ImageGallery from 'react-image-gallery'; 

import BannerImg from '../../Asset/Banner.jpg'

import gal1 from '../../Asset/Gallery/1.jpeg'
import gal2 from '../../Asset/Gallery/2.jpg'
import gal3 from '../../Asset/Gallery/3.jpg'
import gal4 from '../../Asset/Gallery/4.jpeg'
import gal5 from '../../Asset/Gallery/5.jpg'
import gal6 from '../../Asset/Gallery/6.jpg'
import gal7 from '../../Asset/Gallery/7.jpg'
import gal8 from '../../Asset/Gallery/8.jpg'
import gal9 from '../../Asset/Gallery/9.jpeg'
import gal10 from '../../Asset/Gallery/10.jpg'


import './Gallery.css'

function Gallery(){
    const [isLoading, setLoading] = useState(true);
    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('false')
    const images = [
        {
            original: gal1,
            thumbnail: gal1
        },
        {
            original: gal2,
            thumbnail: gal2
        },
        {
            original: gal3,
            thumbnail: gal3
        },
        {
            original: gal4,
            thumbnail: gal4
        },
        {
            original: gal5,
            thumbnail: gal5
        },
        {
            original: gal6,
            thumbnail: gal6
        },
        {
            original: gal7,
            thumbnail: gal7
        },
        {
            original: gal8,
            thumbnail: gal8
        },
        {
            original: gal9,
            thumbnail: gal9
        },
        {
            original: gal10,
            thumbnail: gal10
        },
    ]

    // function someRequest() {
    //     //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    //     return new Promise((resolve) => setTimeout(() => resolve(), 4500));
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
      },[]);
    
    //   if (isLoading) {
    //     //
    //     return null;

        
    //   }

      

      const getImg = (index) => {
        setTempImgSrc(images[index].original)
        setModel(true)
    }

    return(
        <div className="gallery" >

            <div className={model? "model open" : "model"} >
                 <img src = {tempimgSrc} alt = "Galerry" />
                 <h4 onClick={() => {setModel(false)}} >Close</h4>
            </div>
            
            <main id='banner-container' >
                <img className='banner-image' src={BannerImg} alt = "Banner" />

                <div className='banner-title' >
                    <h1>Gallery</h1>
                </div>
            
            <div class="custom-shape-divider-bottom-1666473928">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

        </main>

        <section className="gallery-list" >
            {images.map((item, index) => {
                return(
                    <div onClick={() => {getImg(index)}} className="pics" key={index} >
                        <img src={item.original} style = {{width:"100%"}} alt = "Gallery" />
                    </div>
                )
            })}
        </section>

        {/* <section className='video' style={{marginBottom: "100px"}}>
                
                <div className='video-item' >
                    <iframe src='https://www.youtube.com/embed/eshD9I9X6pg'
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen"
                    />
                </div>

                <div className='video-item' >
                    <iframe src='https://www.youtube.com/embed/lVH_iuI7e1g' 
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen"
                    />
                </div>

            </section> */}

        <footer>
                <h2>Copyright &#169; 2022 Bumi Cimanggis Indah. All rights reserved.</h2>
            </footer>

        </div>
    )

}

export default Gallery