import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieState } from "../MoovieState";
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

export const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movie, movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award, index) => (
              <Award
                description={award.description}
                title={award.title}
                key={index + award.title}
              />
            ))}
          </Awards>
          <ImagesDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImagesDisplay>
        </Details>
      )}
    </>
  );
};

const Award = ({ description, title }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line" />
      <p>{description}</p>
    </AwardStyle>
  );
};

const ImagesDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }

  p {
    padding: 2rem 0;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
