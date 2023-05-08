import React, { useState, useEffect } from 'react'
import {db} from '../../firebase'
import {uid} from 'uid'
import {set, ref} from 'firebase/database'
import swal from 'sweetalert'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {
    Pagination,Navigation, EffectFade, EffectCube, EffectCoverflow, EffectFlip, Autoplay
  } from 'swiper/core';

  
  import 'swiper/css';



import './Home.css'
import Banner from '../Components/Banner/Banner';

//Foto Poster
import poster1 from '../../Asset/Poster/1.jpg'
import poster2 from '../../Asset/Poster/2.jpg'
import poster3 from '../../Asset/Poster/3.jpg'
import poster4 from '../../Asset/Poster/4.jpg'
import poster5 from '../../Asset/Poster/5.jpg'
import poster6 from '../../Asset/Poster/6.jpg'

//Foto Contoh Unit
import unit3666 from '../../Asset/unit/36_66.jpg'
import unit6566 from '../../Asset/unit/65_66.jpg'
import unit65661 from '../../Asset/unit/65_66 1.jpg'
import unit65662 from '../../Asset/unit/65_66 2.jpg'

//Foto Sesi Promo
import backPromo from '../../Asset/Promo background.jpg'
import bonusIcon from '../../Asset/Icon/Bonus.png'

//Foto Fasilitas Perumahan
import masjidIcon from '../../Asset/Icon/Masjid.png'
import poolIcon from '../../Asset/Icon/Pool.png'
import roadIcon from '../../Asset/Icon/Road.png'
import gateIcon from '../../Asset/Icon/Gate.png'
import gardenIcon from '../../Asset/Icon/Garden.png'

//Foto Fasilitas Perkotaan
import aksesIcon from '../../Asset/Icon/Fasilitas Akses.png'
import komersilIcon from '../../Asset/Icon/Fasilitas Komersil.png'
import kesehatanIcon from '../../Asset/Icon/Fasilitas Kesehatan.png'
import ceklistIcon from '../../Asset/Icon/Ceklist.png'

//Foto Kontak
import waIcon from '../../Asset/Icon/Wa Icon.png'

//Foto Map
import gmap from '../../Asset/Gmapfix.png'
import barcode from '../../Asset/barcode map.jpg'

//video
import video1 from '../../Asset/Video/1.mp4'


function Home(){
    const [isLoading, setLoading] = useState(true);
    const [name, setName] = useState('')
    const [noHp, setNoHp] = useState('')
    const [email, setEmail] = useState('')
    const [statusKerja, setStatusKerja] = useState('')
    const unitArr = [
        {
            image: unit3666,
            typeUnit: "36/66",
            note: "Free Design"
        },
        {
            image: unit6566,
            typeUnit: "65/66",
            note: "Free Design"
        },
        {
            image: unit65661,
            typeUnit: "65/66",
            note: "Free Design"
        },
        {
            image: unit65662,
            typeUnit: "65/66",
            note: "Free Design"
        },
        
    ]

    

    // function someRequest() {
    //     //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    //     return new Promise((resolve) => setTimeout(() => resolve(), 4500));
    //   }

      
      useEffect(() => {
        window.scroll(0,0)
        // someRequest().then(() => {
        //   const loaderElement = document.querySelector('.loader-container');
        //   if (loaderElement) {
        //     loaderElement.remove();
        //     setLoading(!isLoading);
        //   }
        // });
      }, []);
    
    //   if (isLoading) {
    //     //
    //     return null;
    //   }


      const submitData = () => {
        const date = new Date()
        const getDate = date.getDate()
        const getMonth = date.getMonth() + 1
        const getYear = date.getFullYear()

        const dateNow = getDate < 10 ? "0"+getDate : getDate
        const monthNow = getMonth < 10 ? "0"+getMonth : getMonth

        const fullDate = getYear+"-"+monthNow+"-"+dateNow
        const uuid = uid()

        // console.log(name);
        // console.log(noHp);
        // console.log(email);
        // console.log(statusKerja);
        // console.log(fullDate);
        
        if(name === "" || noHp === "" || email === "" || statusKerja === ""){
            swal({
                title : "Oopps!",
                text: "Harap Isi Data Dengan Lengkap"
            })
        }else{
            set(ref(db, `/${uuid}`),{
                name: name,
                noHp: noHp,
                email: email,
                statusKerja: statusKerja,
                tanggal: fullDate
            })
            
            swal({
                title : "Berhasil!",
                text: "Terima Kasih",
                icon: 'success'
            })

            setEmail("")
            setName("")
            setNoHp("")
        }

      }

    //   const namaChanger = (e) => {
    //     e.preventDefault();
    //     setName(e)
    //   }

    SwiperCore.use([Autoplay, Pagination, EffectFade, Navigation, EffectCube, EffectCoverflow, EffectFlip]);
      
    return(
        <main id='home-container' >
            
            <Swiper 
            className = "main-slider"  
            autoplay = {{delay: 2500, disableOnInteraction: false}}
            pagination={{
              "clickable": true
            }}
            speed = {1000}
            loop = {true}
            spaceBetween={10} 
             >
              <SwiperSlide><img className = "slider-image" src={backPromo} alt="First slide"  /> </SwiperSlide>
              <SwiperSlide><img className = "slider-image" src={backPromo} alt="First slide"  /> </SwiperSlide>
              <SwiperSlide><img className = "slider-image" src={backPromo} alt="First slide"  /> </SwiperSlide>
          </Swiper>

            <Banner/>


            {/* <section className='video-group' >

                <video controls controlsList='nodownload' muted = {true} >
                    <source src={video1} type = "video/mp4" />
                </video>
                
            </section> */}

            {/* <section className='poster' >

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

            </section> */}


            <section className='promo' >

                <div className='promo-background' >
                    <img  src={backPromo} alt = "promo" />
                </div>
                
                
                <div className='promo-group' >

                    
                    <div className='promo-list' >

                        <h1>Bonus Bulan ini:</h1>

                        <ul>

                            <li> <img className='bonus-img' src={bonusIcon} alt = "Bonus" /> Gratis AC 1/2 PK</li>
                            <li> <img className='bonus-img' src={bonusIcon} alt = "Bonus" /> Gratis Pagar Minimalis</li>
                            <li> <img className='bonus-img' src={bonusIcon} alt = "Bonus" /> Discount Biaya KPR 50%</li>
                            
                        </ul>

                        <h5>*Syarat & Ketentuan Berlaku</h5>

                    </div>

                    <div className='promo-card' >
                    
                    <h1>Isi Form Untuk Dapatkan Info & Promo Eksklusif :</h1>

                    <form className='form-promo'>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} type='text' placeholder='Nama' />
                        <input value={noHp} onChange={(e) => {setNoHp(e.target.value)}} type="number"  placeholder='No. Hp/Wa'  max = "15" />
                        <input value={email} onChange={(e) => {setEmail(e.target.value)}} type='email'placeholder='Email' />
                        <select onChange={(e) => {setStatusKerja(e.target.value)}} >

                            <option value = "" >--Status Pekerjaan--</option>
                            <option value="Tetap" >Tetap</option>
                            <option value='Kontrak'>Kontrak</option>

                        </select>
                        
                    </form>
                    <button onClick={submitData} >Submit</button>
                
                </div>

                </div>

                

            </section>


            <h1 className='unit-title' >
                    Contoh Unit Kami
            </h1>
            <section className='unit' >
                

                {
                    unitArr.map(item => {
                        return(
                            <div className='card-unit' >
                                <img className='unit-image' src={item.image} alt = "Unit" />
                                <h2 className='unit-info1'  >
                                    Type: <h2>{item.typeUnit}</h2>
                                </h2>
                                {/* <h2 className='unit-info2' >
                                    {item.note}
                                </h2> */}
                            </div>
                        )
                    })
                }

            </section>

            
            <div className='back-drop' >
            <section className='fasilitas-perumahan' >

                <h1>Fasilitas Perumahan</h1>

                <div className='fp-list' >

                    <div className='fp-item' >
                        <img src={masjidIcon} alt = "perumahan Cimanggis" />
                        <h3>Masjid</h3>
                    </div>

                    <div className='fp-item' >
                        <img src={poolIcon} alt = "perumahan Cimanggis" />
                        <h3>Swimming Pool</h3>
                    </div>

                    <div className='fp-item' >
                        <img src={gardenIcon} alt = "perumahan Cimanggis" />
                        <h3>Garden</h3>
                    </div>

                    <div className='fp-item' >
                        <img src={roadIcon} alt = "perumahan Cimanggis" />
                        <h3>Row Jalan Lebar</h3>
                    </div>

                    <div className='fp-item' >
                        <img src={gateIcon} alt = "perumahan Cimanggis" />
                        <h3>One Gate System</h3>
                    </div>

                    

                </div>

            </section>
            </div>

            <section className='fasilitas-umum' >
                
                <div className='fu-backdrop' >

                    <h1>Fasilitas Umum Perkotaan</h1>

                    <div className='fu-list' >

                        <div className='fu-item' >

                            <img src={aksesIcon} alt = "perumahan Cimanggis" />

                            <ul className='akses-list' >
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> 8 Menit Gerbang Tol Cibubur</li>
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> 3 Km Stasiun LRT Cibubur</li>
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> Gerbang Tol Cijago</li>
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> Jl. Raya Bogor</li>
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> Jl. Margonda</li>
                            </ul>
                            
                        </div>
                        <div className='fu-item' >

                            <img src={komersilIcon} alt = "perumahan Cimanggis" />

                            <ul className='akses-list' >
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> Lapangan Golf</li>
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> Mall Pesona Juanda</li>
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> Trans Studio Mall</li>
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> Pasar Tradisional Sukatani</li>
                            </ul>
                            
                        </div>
                        <div className='fu-item' >

                            <img src={kesehatanIcon} alt = "perumahan Cimanggis" />

                            <ul className='akses-list' >
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> RS. Melia Cibubur</li>
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis" /> RS. Centra Medika</li>
                                <li> <img src={ceklistIcon} alt = "perumahan Cimanggis"/> RSUD. Cimanggis</li>
                            </ul>
                            
                        </div>

                    </div>

                </div>

            </section>

            {/* <section className='video' >
                
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

            <section className='contact' >
                
                <h1>Contact Us For More Information</h1>

                <div className='contact-list' >
                    
                    <div className='contact-item' >
                        <img src={waIcon} alt = "perumahan Cimanggis" />
                        <a href={`https://api.whatsapp.com/send/?phone=62881025217282&text=Hallo%2C%20Saya%20tertarik%20dengan%20Bumi%20Cimanggis%20Indah%202%2C%20dari%20web%20bumicimanggisindah.com%20mohon%20info%20lebih%20lanjut%F0%9F%99%8F`} target = "_blank" ><h3>0881025217282</h3></a>
                    </div>

                    {/* <div className='contact-item' >
                        <img src={waIcon} alt = "perumahan Cimanggis" />
                        <a href={`https://api.whatsapp.com/send/?phone=6289513880837&text=Hallo%2C%20Saya%20tertarik%20dengan%20Bumi%20Cimanggis%20Indah%202%2C%20dari%20web%20bumicimanggisindah.com%20mohon%20info%20lebih%20lanjut%F0%9F%99%8F`} target = "_blank" ><h3>089513880837</h3></a>
                    </div> */}

                </div>

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

                        {/* <img src={barcode} /> */}

                    </div>

                </div>
                
            </section>

            <footer>
                <h2>Copyright &#169; 2023 Bumi Cimanggis Indah. All rights reserved.</h2>
            </footer>


        </main>
    )
}

export default Home;