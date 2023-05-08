import React, {useEffect, useState} from "react";

import Banner from "../Components/Banner/Banner";
import BannerImg from '../../Asset/Banner.jpg'
import gmap from '../../Asset/Gmap.png'
import './About.css'

function About(){
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
        <div className="aboutus-container">
            
            <main id='banner-container' >
            <img className='banner-image' src={BannerImg} alt = "Banner" />

            <div className='banner-title' >
                <h1>About Us</h1>
            </div>
            
            <div class="custom-shape-divider-bottom-1666473928">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

        </main>

            <section className="aboutus">
                <h1>Bumi Cimanggis Indah</h1>
                <h2>Bumi Cimanggis Indah adalah salah satu dari dua perumahan terlama dan terlengkap yang ada di Cimanggis – Depok.</h2>
                <p>
                Dengan luas awal lahan sesuai izin yang diberikan oleh pemerintah Depok saat itu seluas 30 Hektar. Mencakup kelurahan Sukatani dan Cimanggis. Akan terus bertambah luasnya sampai kurang lebih 50 Hektar.
                </p>

                <p>
                Awal mulai pembebasan lahan pada tahun 1993 seluas 15 hektar. Saat ini kami terus melakukan pengembangan dan perluasan lahan. Bumi Cimanggis Indah 1, telah dihuni oleh 600 keluarga. Sedangkan Bumi Cimanggis Indah 2 telah dihuni oleh 250 keluarga dan akan terus bertambah dengan adanya perluasan lahan di Cimanggis kelurahan Tapos – Depok.
                </p>

                <p>
                Dengan Mengusung Tagline “Bumi Cimanggis Indah: Tempat Tinggal Untuk Membangun Keluarga Yang Bahagia” hunian kami sangat friendly dengan berbagai tempat strategis seperti Mall, Sekolah, Universitas serta Jalan TOL.
                </p>

                <p>
                Dengan komitmen membangun rumah impian masyarakat, yang terjangkau, serta menciptakan lingkungan tempat tinggal yang nyaman, sehat, sejuk dan lengkap dengan fasilitas. Maka kami akan terus diminta dan ditunggu oleh Masyarakat untuk menghasilkan produk-produk property kami. Seperti Rumah landed House, Ruko, Apartemen, Gudang, Kolam Renang, Tempat Ibadah dan Taman.
                </p>
            </section>

            <section className='lokasi' >
                
                <div className='lokasi-group' >

                    <a href='https://www.google.com/maps/place/Bumi+Cimanggis+Indah+2/@-6.4008465,106.8929616,17z/data=!4m6!3m5!1s0x2e69eb0b65a8a869:0xfc75e60852f0012a!8m2!3d-6.4008465!4d106.8951503!16s%2Fg%2F11h3pppy8r' target="_blank" className='lokasi-image' >
                        <img src={gmap} alt = 'lokasi' />
                    </a>

                    <div className='lokasi-detail'>
                        <h1>Detail Lokasi Bumi Cimanggis Indah 2</h1>

                        <div className='lokasi-desc' >

                            <h2>Alamat Marketing Gallery:</h2>
                            <h3>Perumahan Bumi Cimanggis Indah 2 Kavling No.12A Jl. Kp. Kebayunan, Tapos, Kec. Tapos, Kota Depok, Jawa Barat 16457</h3>
                        </div>
                    </div>

                </div>
                
            </section>

            <footer>
                <h2>Copyright &#169; 2022 Bumi Cimanggis Indah. All rights reserved.</h2>
            </footer>

        </div>
    )

}

export default About;