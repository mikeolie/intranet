export const containerVariants = {
  hidden: {
    height: "100vh",
    bottom: 0,
  },
  visible: {
    height: "0vh",
    transition: {
      when: "afterChildren",
      duration: 2.8,
      ease: [1, -0.15, 0.33, 1],
    },
  },
};

export const contentVariants = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 3.4 },
  },
};

export const textVariants = {
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

export const title = {
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
export const pageContent = {
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
