import './Stats.css'
import handshake from './assets/satsIcons/handshake.svg'
import paper from './assets/satsIcons/paper.svg'
import cup from './assets/satsIcons/cup.svg'
import landscape from './assets/satsIcons/landscape.svg'

import happy_clients from './assets/satsIcons/Happy_clients.svg'
import proj_completed from './assets/satsIcons/Projects_completed.svg'
import awards_win from './assets/satsIcons/Awards_win.svg'
import years_in_business from './assets/satsIcons/Years_in_business.svg'


export const Stats = () => {
    return (
        <div className='stats__page'>
            <div className='block__of__ul'>
                <ul className='block__of__stats'>
                    <li className='paper'>
                        <div className='paper__block'>
                            <span>123</span>
                            <img src={proj_completed} alt="proj_completed icon" />
                        </div>
                    </li>
                    <li className='handshake'>
                        <div className='happy__block'>
                            <span>84</span>
                            <img className="happy__clients" src={happy_clients} alt="happy_clients icon" />
                        </div>
                    </li>
                    <li className='scheme'>
                        <div className='scheme__block'>
                            <span>30</span>
                            <img src={years_in_business} alt="years_in_business icon" />
                        </div>
                    </li>
                    <li className='cup'>
                        <div className='cup__block'>
                            <span>37</span>
                            <img src={awards_win} alt="awards_win icon" />
                        </div>
                    </li>
                </ul>
            </div>
            <div className='experience'>
                <span className='years'>30 Years Experience</span>
                <span className='company__constr'>Our company has been the leading provided construction services to clients throughout the USA since 1988.</span>
                <button>Contact Us</button>
            </div>
        </div>
    )
}