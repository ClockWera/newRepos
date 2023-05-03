import './Reasons.css'
import headphones from './assets/headphones.svg'
import pencil from './assets/pencil.svg'

export const Reasons = () => {
    return (
        <div className="reputation__page">
            <h1 className="rep">Our Reputation</h1>
            <div className="three__columns">
                <li className="Services">
                    <img src={headphones} alt="headphones__logo" />
                    <p className='Capital'>Best Services</p>
                    <p className='under__text'>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                </li>
                <li className="Teams">
                    <img src={headphones} alt="headphones__logo" />
                    <p className='Capital'>Best Teams</p>
                    <p className='under__text'>Cursus semper tellus volutpat aliquet lacus.</p>
                </li>
                <li className="Designs">
                    <img src={pencil} alt="pencil__logo" />
                    <p className='Capital'>Best Designs</p>
                    <p className='under__text'>Ultricies at ipsum nunc, tristique nam lectus.</p>
                </li>
            </div>
        </div>
    )
}