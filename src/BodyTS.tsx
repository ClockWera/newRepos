<<<<<<< HEAD:vite-project/src/BodyTS.tsx
import "./Body.css"
import backbutton from './assets/ArrowLeft.svg'
import nextbutton from './assets/ArrowRight.svg'
import pictureForBG from './assets/BGpic.png'
export const Body = () => {
    return (
        <div className="body__all">
            <div className="first__page">
                <div className="back__Ground__firstPage" style={{
                    backgroundImage: `url(${pictureForBG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%'
                }} >
                    <p className="slogan">
                        Building things is our mission.
                    </p>
                    <div className="block_FP">
                        <div className="text__FP">
                            <p className="idk">Feature Projects</p>
                            <p className="idk__2">The National University of Architecture</p>
                        </div>
                        <div className="arrows__andfml">
                            <button className="arrow__Left">
                                <img src={backbutton} alt="" />
                                <span className="img__Left">Back</span>
                            </button>
                            <button className="arrow__Right">
                                <span className="img__Right">Next</span>
                                <img src={nextbutton} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
=======
import "./BodyTS.css"
import backbutton from './assets/ArrowLeft.svg'
import nextbutton from './assets/ArrowRight.svg'
import pictureForBG from './assets/BGpic.png'
function BodyTS() {
    return (
        <div className="body__all">
            <div className="first__page">
                <div className="back__Ground__firstPage" style={{
                    backgroundImage: `url(${pictureForBG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%'
                }} >
                    <p className="slogan">
                        Building things is our mission.
                    </p>
                    <div className="block_FP">
                        <div className="text__FP">
                            <p className="idk">Feature Projects</p>
                            <p className="idk__2">The National University of Architecture</p>
                        </div>
                        <div className="arrows__andfml">
                            <button className="arrow__Left">
                                <img src={backbutton} alt="" />
                                <span className="img__Left">Back</span>
                            </button>
                            <button className="arrow__Right">
                                <span className="img__Right">Next</span>
                                <img src={nextbutton} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BodyTS
>>>>>>> 5dafb63b0f827df0435e9881084f2f65bc3d6fee:src/BodyTS.tsx
