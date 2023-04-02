import "./Body.css"
import backbutton from './assets/ArrowLeft.svg'
import nextbutton from './assets/ArrowRight.svg'

export const Body = () => {
    return (
        <div className="body__all">
            <div className="first__page">
                <div className="back__Ground__firstPage">
                    <p className="slogan">
                        Building things is our mission.
                    </p>
                    <div className="block__FP">
                        <div className="text__FP">
                            <p className="idk">Feature Projects</p>
                            <p className="idk__2">The National University of Architecture</p>
                        </div>
                        <div className="arrows__andfml">
                            <li>
                                <button className="arrow__Left">
                                    <img src={backbutton} alt="" />
                                    <span className="img__Left">Back</span>
                                </button>
                            </li>
                            <li>
                                <button className="arrow__Right">
                                    <span className="img__Right">Next</span>
                                    <img src={nextbutton} alt="" />
                                </button>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
