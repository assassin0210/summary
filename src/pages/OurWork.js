import styled from "styled-components";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  fade,
  lineAnimation,
  pageAnimation,
  photoAnimation,
  skiderContainer,
  slider,
} from "../animation";
import { useScroll } from "../components/useScroll";

export const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();

  const state = [
    {
      text: "The Athlete",
      link: "/work/the-athlete",
    },
    {
      text: "The Racer",
      link: "/work/the-racer",
    },
    {
      text: "Good Times",
      link: "/work/good-times",
    },
  ];

  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <motion.div variants={skiderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>{state[0].text}</motion.h2>
        <motion.div variants={lineAnimation} className="line" />
        <Link to={state[0].link}>
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={require(`../img/small_1.png`).default}
              alt=""
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        initial="hidden"
        animate={controls1}
        variants={fade}
        ref={element1}
      >
        <motion.h2 variants={fade}>{state[1].text}</motion.h2>
        <motion.div variants={lineAnimation} className="line" />
        <Link to={state[1].link}>
          <motion.img src={require(`../img/small_2.png`).default} alt="" />
        </Link>
      </Movie>
      <Movie
        initial="hidden"
        animate={controls2}
        variants={fade}
        ref={element2}
      >
        <motion.h2 variants={fade}>{state[2].text}</motion.h2>
        <motion.div variants={lineAnimation} className="line" />
        <Link to={state[2].link}>
          <motion.img src={require(`../img/small_3.png`).default} alt="" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: #2c2c2c;

  h2 {
    padding: 1rem 0;
  }

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
