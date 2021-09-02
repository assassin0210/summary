import home1 from '../img/home1.png'

export const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>
                            We work to make
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>
                            Your
                            <span>
                                dreams
                            </span>
                            come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>
                            true.
                        </h2>
                    </div>
                </div>
                <p>Contact us for any photography </p>
                <button>Contact us</button>
            </div>
            <div className="image">
                <img src={home1} alt="photo"/>
            </div>
        </div>
    )
}
