import home1 from '../img/home1.png'
import {About, Description, Hide, Image} from "../style";

export const AboutSection = () => {
    return (
        <About className='about'>
            <Description className="description">
                <div className="title">
                    <Hide className="hide">
                        <h2>
                            We work to make
                        </h2>
                    </Hide>
                    <Hide className="hide">
                        <h2>
                            Your
                            <span>
                                dreams
                            </span>
                            come
                        </h2>
                    </Hide>
                    <Hide className="hide">
                        <h2>
                            true.
                        </h2>
                    </Hide>
                </div>
                <p>Contact us for any photography </p>
                <button>Contact us</button>
            </Description>
            <Image className="image">
                <img src={home1}/>
            </Image>
        </About>
    )
}



