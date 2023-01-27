import React,{useEffect} from 'react'
import './Main.css'
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [

  {
    id: 1,
    imgSrc: img,
    destTitle: 'Ayodhya (Ram Mandir)',
    location: "India",
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "Ram Mandir is a Hindu temple that is being built in Ayodhya, Uttar Pradesh, India, at the site of Ram Janmabhoomi, according to the Ramayana the birthplace of Rama, a principal deity of Hinduism. The temple construction is being supervised by the Shri Ram Janmabhoomi Teerth Kshetra."
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Ram Setu',
    location:"India",
    grade:'CULTURAL RELAX',
    fees:'$750',
    description:"Adam's Bridge,[a] also known as Rama's Bridge or Rama Setu,[b] is a chain of natural limestone shoals, between Pamban Island, also known as Rameswaram Island, off the south-eastern coast of Tamil Nadu, India, and Mannar Island, off the north-western coast of Sri Lanka."
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Varanasi',
    location:"India",
    grade:'CULTURAL RELAX',
    fees:'$550',
    description:"Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites."
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Dwarka',
    location:"India",
    grade:'CULTURAL RELAX',
    fees:'$400',
    description:"Dwarka is an ancient city in the northwestern Indian state of Gujarat. It’s known as a Hindu pilgrimage site. The ancient Dwarkadhish Temple has an elaborately tiered main shrine, a carved entrance and a black-marble idol of Lord Krishna."
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'thiruvananthapuram',
    location:"India",
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:"Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family."
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'Sahyadri',
    location:"India",
    grade:'CULTURAL RELAX',
    fees:'$300',
    description:"There are thousands of attractions in Western Ghats. These mountains start from Nashik district to the north of Maharashtra and end in Kerala, southern most state of India, of course on the western part of India."
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'Angkor wat',
    location:"Cambodia",
    grade:'CULTURAL RELAX',
    fees:'$790',
    description:"Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple."
  },
  {
    id:8,
    imgSrc:img8,
    destTitle:'Taj Mahal',
    location:"India",
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal."
  },
  {
    id:9,
    imgSrc:img9,
    destTitle:'Bail Island',
    location:"Indonesia",
    grade:'CULTURAL RELAX',
    fees:'$500',
    description:"Bali is the only Hindu-majority province in Indonesia, with 86.9% of the population adhering to Balinese Hinduism.[3] It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music."
  },

]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-Aos='fade-right' className="title">
          Most visited destinstions
        </h3>
      </div>
      <div className="secContent grid">

        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-Aos='fade-up' className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>


                <div className="cardInfo">
                  <h4 className="desTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
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
                  <button className='btn flex'>
                    DETAILS<HiOutlineClipboardCheck className='icon' />
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
