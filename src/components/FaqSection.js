import {About} from "../style";
import styled from "styled-components";


export const FaqSection = () => {
    return (
        <Faq className='faq'>
            <h2>Any question <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do i Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, in.</p>
                </div>
                <div className="faq-line"/>
            </div>
            <div className="question">
                <h4>How Do i Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, in.</p>
                </div>
                <div className="faq-line"/>

            </div>
            <div className="question">
                <h4>How Do i Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, in.</p>
                </div>
                <div className="faq-line"/>
            </div>
            <div className="question">
                <h4>How Do i Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, in.</p>
                </div>
                <div className="faq-line"/>
            </div>

        </Faq>
    )
}

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

`