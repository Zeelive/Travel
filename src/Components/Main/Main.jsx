import React, {useEffect} from 'react';
import './main.css';
import img from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';



import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';

import Aos from 'aos';
import 'aos/dist/aos.css';



const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Lekki-Ikoyi Link Bridge",
    location: "Lekki-Ikoyi, Lagos",
    grade: "CULTURAL RELAX",
    fees: "$40",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure."
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "National Art Theatre",
    location: "Iganmu Rd, Lagos",
    grade: "CULTURAL RELAX",
    fees: "$70",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure."
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Eko Tourist Beach Resort",
    location: "Ibeju-Lekki, Lagos",
    grade: "CULTURAL RELAX",
    fees: "$75",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure."
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Tropical Beach",
    location: "Lagos Nigeria",
    grade: "CULTURAL RELAX",
    fees: "$50",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure."
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Lekki Conservation Center",
    location: "Lekki, Lagos",
    grade: "CULTURAL RELAX",
    fees: "$85",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure."
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Sencillo Beach House",
    location: "Ilashe Island, Lagos",
    grade: "CULTURAL RELAX",
    fees: "$120",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure."
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "La Campagne Tropicana",
    location: "Lekki, Lagos",
    grade: "CULTURAL RELAX",
    fees: "$65",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure."
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Landmark Leisure Beach",
    location: "VI, Lagos",
    grade: "CULTURAL RELAX",
    fees: "$60",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure."
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Lakowe Lakes Golf & Country Estate",
    location: "Ibeju-Lekki, Lagos",
    grade: "CULTURAL RELAX",
    fees: "$100",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure."
  },
]

const Main = () => {

  useEffect (()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">

        {
           Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=> {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck classname="icon" />
                  </button>
                </div>
              </div>
            )
           })    
        }

      </div>

    </section>
  )
}

export default Main