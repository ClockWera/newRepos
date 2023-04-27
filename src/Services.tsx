import './Services.css'
import Construction from '../src/assets/servicespics/Construction.svg'
import Renovation from '../src/assets/servicespics/Renovation.svg'
import Consultation from '../src/assets/servicespics/Consultation.svg'
import Repair from '../src/assets/servicespics/Repair Services.svg'
import Architecture from '../src/assets/servicespics/Architecture.svg'
import Electric from '../src/assets/servicespics/Electric.svg'
import WhiteLine from '../src/assets/servicespics/white.svg'

export const Services = () => {
    return(
        <div className='All__block'>
            <p className='top__text'>Services</p>
            <ul className='block__of__box'>
                <li className='Construction__'>
                    <div><img src={Construction} alt="Construction pic" /></div>
                    <div><img src={WhiteLine} alt="white line svg image" /></div>
                    <p>Construction</p>
                </li>
                <li className='Renovation__'>
                    <div><img src={Renovation} alt="Renovation svg image" /></div>
                    <div><img src={WhiteLine} alt="white line svg image" /></div>
                    <p>Renovation</p>
                </li>
                <li className='Consultation__'>
                    <div><img src={Consultation} alt="Consultation svg image" /></div>
                    <div><img src={WhiteLine} alt="white line svg image" /></div>
                    <p>Consultation</p>
                </li>
                <li className='Repair__'>
                    <div><img src={Repair} alt="Repair svg image" /></div>
                    <div><img src={WhiteLine} alt="white line svg image" /></div>
                    <p>Repair Services</p>
                </li>
                <li className='Architecture__'>
                    <div><img src={Architecture} alt="Architecture svg image" /></div>
                    <div><img src={WhiteLine} alt="white line svg image" /></div>
                    <p>Architecture</p>
                </li>
                <li className='Electric__'>
                    <div><img src={Electric} alt="Electric  svg image" /></div>
                    <div><img src={WhiteLine} alt="white line svg image" /></div>
                    <p>Electric</p>
                </li>
            </ul>
        </div>
    )
}