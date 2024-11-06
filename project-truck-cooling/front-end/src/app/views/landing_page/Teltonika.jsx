// Teltonika.jsx
import React, { useState } from 'react';
import Navbar from '../landing_page/Navbar';
import Footer from '../landing_page/Footer';
import Modal from '../landing_page/Modal/Modal'; 
import './teltonika.css';
import img1 from '../landing_page/tel1.png';
import img3 from '../landing_page/tel3.png';
import img4 from '../landing_page/tel4.png';
import img5 from '../landing_page/tel5.png';
import img6 from '../landing_page/tel6.png';
import img7 from '../landing_page/tel7.png';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    telTitle: 'Teltonika A',
    fees: 'Rp900.000',
  },
  {
    id: 2,
    imgSrc: img7,
    telTitle: 'Teltonika B',
    fees: 'Rp900.000',
  },
  {
    id: 3,
    imgSrc: img3,
    telTitle: 'Teltonika C',
    fees: 'Rp900.000',
  },
  {
    id: 4,
    imgSrc: img4,
    telTitle: 'Teltonika D',
    fees: 'Rp900.000',
  },
  {
    id: 5,
    imgSrc: img5,
    telTitle: 'Teltonika E',
    fees: 'Rp900.000',
  },
  {
    id: 6,
    imgSrc: img6,
    telTitle: 'Teltonika F',
    fees: 'Rp900.000',
  },
];

const Teltonika = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <section className='teltonika'>
        <div className="secTeltonika">
          <h1>Semua Teltonika</h1>
          <p>Berikut Teltonika yang dapat Anda sewa</p>

          <div className="teltonika-grid">
            {Data.map(({ id, imgSrc, telTitle, fees }) => {
              return (
                <div key={id} className='singleTeltonika'>
                  <div className="imageDiv">
                    <img src={imgSrc} alt={telTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className='telTitle'>{telTitle}</h4>

                    <div className='fees flex'>
                      <div className='price'>
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <button className='btn flex' onClick={openModal}>Sewa</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {isModalOpen && <Modal onClose={closeModal} />}
      <Footer />
    </>
  );
};

export default Teltonika;
