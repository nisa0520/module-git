import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./layanan.css";
import layananData from "./layananData";

function Layanan() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya terjadi sekali
    threshold: 0.2,    // Elemen mulai terlihat saat 20% muncul di viewport
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="layanan">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <h1>Layanan</h1>
        <p>Berikut layanan yang kami berikan</p>
      </motion.div>
      <motion.div
        className="layanancard"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {layananData.map((item, index) => (
          <motion.div
            className="layanan-item"
            key={item.id || index}
            variants={itemVariants}
          >
            <div className="item-heading">
              {item.heading}
              <item.icon className="item-icon" />
            </div>
            <p className="item-text">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Layanan;
