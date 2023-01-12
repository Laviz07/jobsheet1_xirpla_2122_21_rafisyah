import React from 'react'
import './home.css'
import rafi2 from '../../assets/rafi 2.png'
import {Link} from 'react-router-dom'


const AboutMe = () => {
  return (
    <div className='me-container'>
        <div className='container'>
        <div className='me-flex'>
          <div className='me-img-cont revealr'>
            <img src={rafi2} className='me-img'/>
          </div>  

          <div className='me-text reveall'>
            <h3 className='me-title'>
                About Me
            </h3>
            <p className='me-parag'>
            Halo, saya adalah seorang siswa dari program studi <b>Rekayasa Perangkat lunak</b>. 
            Saya Memiliki ketertarikan terhadap dunia teknologi terutama tentang <i>programing</i> dan <i>gadget</i>.
            </p>
            
            <a href='https://wa.me/+6282125622387'><button className='button2' >Lets Talk</button></a>
            <Link to='/tentang'><button className='button2 btnme1' >See My Biodata</button></Link>
          </div>

        </div>
        </div>
    </div>
  )
}

export default AboutMe