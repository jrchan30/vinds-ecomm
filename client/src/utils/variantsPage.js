const variants = {
  initial: { x: "100vw", opacity: 0 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default variants;
