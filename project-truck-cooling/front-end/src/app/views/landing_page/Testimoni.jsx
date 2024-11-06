// //import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './testimoni.css'; // General styles
// import './testimoni.css'; // Testimonial-specific styles

// const testimonialsData = [
//   {
//     quote: "I've been working with these guys for a long time and I can say that my house is in the perfect hands.",
//     name: "Allan Collins",
//     position: "Client"
//   },
//   {
//     quote: "Working with Sentry Oak is just great, every problem in my house is solved in a matter of days.",
//     name: "Clay Washington",
//     position: "Client"
//   },
//   {
//     quote: "Once a pipe burst in my kitchen and an hour later it was already repaired, thanks to Sentry Oak.",
//     name: "Tanya Grant",
//     position: "Client"
//   },
//   {
//     quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
//     name: "John Smith",
//     position: "Marketing Director at XYZ Corp"
//   },
//   {
//     quote: "Positivus has transformed our online presence and helped us scale our business in ways we didn't think were possible. Their team is knowledgeable and proactive.",
//     name: "Jane Doe",
//     position: "CEO at ABC Inc"
//   },
// ];

// const settings = {
//   dots: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
// };

// const Testimonials = () => {
//   return (
//     <div className="section__container">
//       <div className="header">
//         <p>TESTIMONIALS</p>
//         <h1>What our clients say about us.</h1>
//       </div>
//       <div className="slider-container">
//         <Slider {...settings}>
//           {testimonialsData.map((testimonial, index) => (
//             <div className="testimonial-card" key={index}>
//               <span><i className="ri-double-quotes-l"></i></span>
//               <p className="quote">{testimonial.quote}</p>
//               <hr />
//               <div className="author">
//                 <h3 className="name">{testimonial.name}</h3>
//                 <p>{testimonial.position}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// function Footer() {
//   return (
//     <div className="footer">
//       <h4>No two homes are alike!</h4>
//       <p>
//         Our Elite network, combined with your personal needs, allows us to
//         create a home plan specifically tailored to you.
//       </p>
//       <button>GET A QUOTE</button>
//     </div>
//   );
// }

// export default Testimonials;


//import React from 'react';
import './testimoni.css'; 

function Testimonials() {
  return (
    <div className="section__container">
      <div className="header">
        <p>TESTIMONIALS</p>
        <h1>Apa yang dikatakan oleh klien kami.</h1>
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
