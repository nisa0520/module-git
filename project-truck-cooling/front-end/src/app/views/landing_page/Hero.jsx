import { motion } from "framer-motion";
import "./hero.css";

function Hero(props) {
  return (
    <div className={props.cName}>
      <motion.img
        alt="HeroImg"
        src={props.heroImg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="hero-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h1>{props.title}</h1>
        <p>{props.text}</p> {/* Teks diambil dari props */}
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
