import './AboutUs.css'

export const AboutUs = () => {
    return (
        <div className='AboutUs__page'>
            <div className='bg__man'></div>
            <div className='aboutus__text'>
                <p className='large__text'>About us</p>
                <p className='common__text'>
                    For more than 30 years we have been     
                    delivering world-class construction 
                    and we've built many lasting 
                    relationships along the way. 
                    <br /><br />
                    We've matured into an industry leader 
                    and trusted resource for those seeking 
                    quality, innovation and reliability when 
                    building in the U.S.
                    </p>
                <button className='button__style'><a href='#' className='button__text'>More on Our History</a></button>
            </div>
        </div>
    )
}