import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/rctv-logo.png";
import {
  containerVariants,
  contentVariants,
  pageContent,
  textVariants,
  title,
} from "./animations";
import "./styles.scss";
import { DEPARTMENTS } from "../../common/constants";

function Home() {
  const [selectedDepartment, selectDepartment] = useState<string>(
    DEPARTMENTS[0]
  );
  const departments = DEPARTMENTS.map((department: string) => (
    <li key={department} onClick={() => selectDepartment(department)}>
      {department}
    </li>
  ));
  const INTRO_TEXT = "Rare Collectibles Intranet Site";
  const animatedWords = INTRO_TEXT.split(" \u00A0").map((word) => {
    return (
      <span key={word} style={{ overflow: "hidden", display: "inline-block" }}>
        <motion.span
          className="animated__text--active"
          style={{ display: "inline-block" }}
          variants={textVariants}
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
        variants={containerVariants}
        animate="visible"
        initial="hidden"
      >
        <h4 className="animated-text__wrapper">{animatedWords}</h4>
      </motion.div>
      <motion.section variants={contentVariants} className="menu__container">
        <header>Hello!</header>
      </motion.section>
      <motion.main
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <motion.section variants={pageContent}>
          <header>
            <img src={logo} alt="Rare Collectibles logo" />
            <motion.h4 variants={title}>Announcements</motion.h4>
          </header>
        </motion.section>
        <motion.section
          variants={pageContent}
          className="announcements__container"
        >
          <ul className="department-list__container">{departments}</ul>
          <article className="department-section__header">
            <div />
            <h4>{selectedDepartment} Announcements</h4>
          </article>
        </motion.section>
      </motion.main>
    </div>
  );
}

export default Home;
