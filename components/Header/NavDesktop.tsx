import { motion } from "framer-motion";

export default function NavDesktop() {
  const variant = {
    active: {
      y: "0",
    },
    inactive: {
      y: "-100%",
      transition: { duration: 4 },
    },
  };

  return (
    <motion.div className="nav__menu">
      <motion.a
        variants={variant}
        initial="inactive"
        animate="active"
        transition={{ delay: 0.6 }}
        href=""
        className="main-navigation__tab "
      >
        <p>餐饮</p>
        <span>Food</span>
      </motion.a>
      <motion.a
        variants={variant}
        initial="inactive"
        animate="active"
        transition={{ delay: 0.3 }}
        href=""
        className="main-navigation__tab  "
      >
        <p>購物</p>
        <span>Retail</span>
      </motion.a>
      <motion.a
        variants={variant}
        initial="inactive"
        animate="active"
        href=""
        className="main-navigation__tab  "
      >
        <p>文化</p>
        <span>Community</span>
      </motion.a>
    </motion.div>
  );
}
