import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Article from "@mui/icons-material/Article";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import HomeIcon from "@mui/icons-material/Home";

import Posts from "../../components/Posts";
import Weather from "../../components/Weather";
import ArchivedPosts from "../../components/ArchivedPosts";

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
import { useAppDispatch } from "../../config/hooks";

import { clearPosts } from "../../actions/posts";
import { getWeather } from "../../actions/weather";

function Home() {
  const dispatch = useAppDispatch();
  const [selectedDepartment, selectDepartment] = useState<string>(
    DEPARTMENTS[0]
  );
  useEffect(() => {
    dispatch(getWeather());
    dispatch(clearPosts());
  });
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
      <motion.section variants={pageContent} className="menu__container">
        <header style={{ marginTop: 100 }}>Hello!</header>
        <List className="menu__list">
          <ListItem className="menu__item">
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem className="menu__item">
            <ListItemAvatar>
              <Avatar>
                <Article />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Forms" />
          </ListItem>
        </List>
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
        <motion.section variants={pageContent}>
          <ul className="department-list__container">{departments}</ul>
          <article className="home-section__header">
            <div />
            <h4>{selectedDepartment} Announcements</h4>
          </article>
          <Posts />
        </motion.section>
      </motion.main>
      <motion.article
        variants={contentVariants}
        initial="initial"
        animate="animate"
        className="weather__container"
      >
        <motion.section variants={pageContent}>
          <header className="home-section__header" style={{ marginBottom: 0 }}>
            <div />
            <motion.h4 variants={title}>Weather</motion.h4>
          </header>
        </motion.section>
        <motion.section variants={pageContent}>
          <Weather />
          <ArchivedPosts />
        </motion.section>
      </motion.article>
    </div>
  );
}

export default Home;
