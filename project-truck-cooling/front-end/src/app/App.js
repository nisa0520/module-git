//import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './views/landing_page/Home'
import Tentang_Kami from './views/landing_page/Tentang_Kami';
import Testimoni from './views/landing_page/Testimoni';
import Layanan from './views/Layanan/Layanan';
import JwtLogin from './views/sessions/JwtLogin';
import Teltonika from './views/landing_page/Teltonika';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/layanan" element={<Layanan/>}/>
        <Route path="/testimonial" element={<Testimoni/>}/>
        <Route path="/tentangkami" element={<Tentang_Kami/>}/>
        <Route path="/teltonika" element={<Teltonika/>} />
        <Route path="/session/signin" element={<JwtLogin/>}/>
      </Routes>
    </div>
  );
}


// const App = () => {
//   return (
//     <>
//     {/* <Navbar/>
//     <Home/> */}
//     {/* <Main/>
//     <Footer/> */}
//     </>
//   )
// }

// export default App