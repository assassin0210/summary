import styled from "styled-components";
import { Link } from "react-router-dom";

export const OurWork = () => {
  const state = {
    0: {
      text: "The Athlete",
      link: "/work/the-athlete",
    },
    1: {
      text: "The Racer",
      link: "/work/the-racer",
    },
    2: {
      text: "Good Times",
      link: "/work/good-times",
    },
  };

  return (
    <Work>
      {[...new Array(3)].map((_, index) => (
        <Movie>
          <h2>{state[index].text}</h2>
          <div className="line" />
          <Link to={state[index].link} key={index}>
            <img
              src={require(`../img/small_${index + 1}.png`).default}
              alt=""
            />
          </Link>
        </Movie>
      ))}
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }

  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
`;
