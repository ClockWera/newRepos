import './Reasons.css'
import headphones from './assets/headphones.svg'
import pencil from './assets/pencil.svg'

export const Reasons = () => {
    return (
        <div className="reputation__page">
            <h1 className="rep">Our Reputation</h1>
            <div className="three__columns">
                <ul className="Services">
                    <img src={headphones} alt="headphones__logo" />
                    <p>Best Services</p>
                    <p>Nullam senectus porttitor in <br></br> eget. Eget rutrum leo interdum.</p>
                </ul>
                <ul className="Teams">
                    <img src={headphones} alt="headphones__logo" />
                    <p>Best Teams</p>
                    <p>Cursus semper tellus volutpat <br></br> aliquet lacus.</p>
                </ul>
                <ul className="Designs">
                    <img src={pencil} alt="pencil__logo" />
                    <p>Best Designs</p>
                    <p>Ultricies at ipsum nunc,<br></br> tristique nam lectus.</p>
                </ul>
            </div>
        </div>
    )
}