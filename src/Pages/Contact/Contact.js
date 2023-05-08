import React, {useState, useEffect} from "react";

import BannerImg from '../../Asset/Banner.jpg'
import './Contact.css'
import waIcon from '../../Asset/Icon/Wa Icon.png'
import locationIcon from '../../Asset/Icon/Location Icon.png'
import emailIcon from '../../Asset/Icon/Email Icon.png'


function Contact(){
    const [isLoading, setLoading] = useState(true);

    // function someRequest() {
    //     //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    //     return new Promise((resolve) => setTimeout(() => resolve(), 2500));
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
        <div className="contact-container" >
            <main id='banner-container' >
            <img className='banner-image' src={BannerImg} alt = "Banner" />

            <div className='banner-title' >
                
                <h1>Contact us</h1>
            </div>
            
            <div class="custom-shape-divider-bottom-1666473928">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

        </main>

        
        <div className="contact-group" >

            <div className="contact-card" >
                <img src={waIcon} alt = "Whatsapp" />
                <h1>Phone / WA</h1>
                <a href={`https://api.whatsapp.com/send/?phone=62881025217282&text=Hallo%2C%20Saya%20tertarik%20dengan%20Bumi%20Cimanggis%20Indah%202%2C%20dari%20web%20bumicimanggisindah.com%20mohon%20info%20lebih%20lanjut%F0%9F%99%8F`} target = "_blank" ><h3>0881025217282</h3></a>
                {/* <a href={`https://api.whatsapp.com/send/?phone=6289513880837&text=Hallo%2C%20Saya%20tertarik%20dengan%20Bumi%20Cimanggis%20Indah%202%2C%20dari%20web%20bumicimanggisindah.com%20mohon%20info%20lebih%20lanjut%F0%9F%99%8F`} target = "_blank" ><h3>089513880837</h3></a> */}
            </div>

            <div className="contact-card" >
                <img src={locationIcon} alt = "Location" />
                <h1>Address</h1>
                <a href='https://www.google.com/maps/place/Bumi+Cimanggis+Indah+2/@-6.4008465,106.8929616,17z/data=!4m6!3m5!1s0x2e69eb0b65a8a869:0xfc75e60852f0012a!8m2!3d-6.4008465!4d106.8951503!16s%2Fg%2F11h3pppy8r' target="_blank" className='lokasi-image' >
                Jl. Kp. Kebayunan, Tapos, Kec. Tapos, Kota Depok, Jawa Barat 16457
                </a>
            </div>

            <div className="contact-card" >
                <img src={emailIcon} alt = "Email" />
                <h1>Email</h1>
                <a href = "mailto: sales@bumicimanggisindah.com" target= "_blank" >sales@bumicimanggisindah.com</a>
            </div>

        </div>


        <footer>
                <h2>Copyright &#169; 2022 Bumi Cimanggis Indah. All rights reserved.</h2>
            </footer>

        </div>
    )

}

export default Contact;