import React, { useState } from "react";
import Navbar from "../landing_page/Navbar";
import Hero from "../landing_page/Hero";
import Layanan from "../landing_page/Layanan";
import Testimoni from "../landing_page/Testimoni";
import Footer from "../landing_page/Footer";

function Home() {
  const [heroText, setHeroText] = useState(
    "Memonitoring menggunakan Teltonika yang merupakan perangkat jaringan yang dirancang untuk menyediakan konektivitas internet melalui jaringan seluler dan, dalam beberapa model, juga bisa terhubung melalui jaringan kabel."
  );

  return (
    <div>
      <Navbar />
      <Hero 
        cName="hero"
        title="Cold Chain Smart Monitoring"
        heroImg={require('../landing_page/truk2.jpg')}
        text={heroText} // Menggunakan state untuk teks
        buttonText="Sewa Teltonika"
        url="/teltonika"
        btnClass="show"
      />
      <Layanan />
      <Testimoni />
      <Footer />
    </div>
  );
}

export default Home;