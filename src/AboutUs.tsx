import './AboutUs.css'
import man from './assets/man.svg'

export const AboutUs = () => {
    return (
        <div className='AboutUs__page'>
            <div className='bg__man'><img src={man} alt="bg__for__this__page" /></div>
            <div className='aboutus__text'>
                <p className='large__text'>About us</p>
                <p className='common__text'>
                    For more than 30 years we have been <br />
                    delivering world-class construction <br />
                    and we've built many lasting <br />
                    relationships along the way. <br />
                    <br />
                    We've matured into an industry leader <br />
                    and trusted resource for those seeking <br />
                    quality, innovation and reliability when <br />
                    building in the U.S.
                    </p>
                <button className='button__style'><a href='#' className='button__text'>More on Our History</a></button>
            </div>
        </div>
    )
}