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
            <div className='block__of__stats'>
                <ul>
                    <li className='handshake'>
                        <div>
                            <img className="hands__icon" src={handshake} alt="handshake__icon" />
                            <span>84</span>
                            <img className="happy__clients" src={happy_clients} alt="happy_clients icon" />
                        </div>
                    </li>
                    <li className='paper'>
                        <img src={paper} alt="paper__icon" />
                        <span>123</span>
                        <img src={proj_completed} alt="proj_completed icon" />
                    </li>
                    <li className='cup'>
                        <img src={cup} alt="cup__icon" />
                        <span>37</span>
                        <img src={awards_win} alt="awards_win icon" />
                    </li>
                    <li className='scheme'>
                        <img src={landscape} alt="landscape__icon" />
                        <span>30</span>
                        <img src={years_in_business} alt="years_in_business icon" />
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