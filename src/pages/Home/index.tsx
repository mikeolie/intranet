import { FunctionComponent } from "react";
import { motion } from "framer-motion"
import logo from "../../assets/images/rctv-logo.png";
import "./styles.scss";
import { DEPARTMENTS } from "../../common/constants";

const Home: FunctionComponent = () => {
  const container = {
    hidden: {
      height: "100vh",
      bottom: 0,
    },
    visible: {
      height: "0vh",
      transition: {
        when: "afterChildren",
        duration: 2.4,
        ease: [1, -0.15, 0.33, 1],
      },
    },
  };
  const content = {
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 2.8 },
    },
  };
  const item = {
    hidden: {
      y: "200%",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
      y: "-20%",
    },
  };
  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  const pageContent = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  const INTRO_TEXT = "Rare Collectibles Intranet Site";
  const animatedWords = INTRO_TEXT.split(" \u00A0").map((word) => {
    return (
      <span key={word} style={{ overflow: "hidden", display: "inline-block" }}>
        <motion.span
          className="animated__text--active"
          style={{ display: "inline-block" }}
          variants={item}
        >
          {word}
        </motion.span>
      </span>
    );
  });

  return (
    <div className="App">
      <motion.div
        className="intro__wrapper"
        variants={container}
        animate="visible"
        initial="hidden"
      >
        <h4 className="animated-text__wrapper">{animatedWords}</h4>
      </motion.div>
      <motion.section variants={content} className="menu__container">
        <header>Hello!</header>
      </motion.section>
      <motion.main variants={content} initial="initial" animate="animate">
        <motion.section variants={pageContent}>
          <header>
            <img src={logo} alt="Rare Collectibles logo" />
            <motion.h4 variants={title}>Announcements</motion.h4>
          </header>
        </motion.section>
        <motion.section variants={pageContent} className="announcements__container">
          <ul className="department-list__container">
            {DEPARTMENTS.map((department) => (
              <li key={department}>{department}</li>
            ))}
          </ul>
          <article className="section__header">
            <h4>Announcements</h4>
          </article>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Home;
