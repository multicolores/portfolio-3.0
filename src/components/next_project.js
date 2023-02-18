import React from "react";
import { motion } from "framer-motion";
import Image from "../components/Image";

const pageVariants = {
  initial: {},
  in: {},
  out: {
    y: 400,
  },
};
const pageTransition = {
  duration: 1,
  // ease: "anticipate",
};

function NextProject(props) {
  return (
    <>
      <motion.section
        className="next_project"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <span>Project suivant</span>
        <h1>{props.project}</h1>
        <div className="img_container">
          <Image filename={props.image} alt={"Next project image"} />
        </div>
      </motion.section>
    </>
  );
}

export default NextProject;
