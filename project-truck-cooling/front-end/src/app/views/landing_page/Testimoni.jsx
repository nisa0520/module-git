//import React from 'react';
import './testimoni.css'; 

function Testimonials() {
  return (
    <div className="section__container">
      <div className="header">
        <h1>Testimonials</h1>
        <p>Apa yang dikatakan oleh klien kami.</p>
      </div>
      <div className="testimonials__grid">
        <Card 
          image={require('../landing_page/pic-1.jpg')}
          name="Allan Collins"
          text="I've been working with these guys for a long time and I can say that my house is in the perfect hands."
        />
        <Card 
          image={require('../landing_page/pic-2.jpeg')}
          name="Clay Washington"
          text="Working with Sentry Oak is just great, every problem in my house is solved in a matter of days."
        />
        <Card 
          image={require('../landing_page/pic-3.jpg')}
          name="Tanya Grant"
          text="Once a pipe burst in my kitchen and an hour later it was already repaired, thanks to Sentry Oak."
        />
      </div>
      <Footer />
    </div>
  );
}

function Card({ image, name, text }) {
  return (
    <div className="card">
      <span><i className="ri-double-quotes-l"></i></span>
      <p>{text}</p>
      <hr />
      <img src={image} alt="user" />
      <p className="name">{name}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h4>No two homes are alike!</h4>
      <p>
        Our Elite network, combined with your personal needs, allows us to
        create a home plan specifically tailored to you.
      </p>
      <button>GET A QUOTE</button>
    </div>
  );
}

export default Testimonials;
