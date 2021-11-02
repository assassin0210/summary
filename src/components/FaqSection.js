import { About } from "../style";
import styled from "styled-components";
import { Toggle } from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

export const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq
      initial="hidden"
      animate={controls}
      variants={scrollReveal}
      ref={element}
      className="faq"
    >
      <h2>
        Any question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?1">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              in.
            </p>
          </div>
        </Toggle>
        <Toggle title="How Do i Start?2">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              in.
            </p>
          </div>
        </Toggle>
        <Toggle title="How Do i Start?3">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              in.
            </p>
          </div>
        </Toggle>
        <Toggle title="How Do i Start?4">
          <div className="question">
            <h4>How Do i Start?</h4>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, in.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  p {
    padding: 1rem 0;
  }
`;
