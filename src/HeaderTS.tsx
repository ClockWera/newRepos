<<<<<<< HEAD:vite-project/src/HeaderTS.tsx
import Symbls from './assets/Random Symboles 3.png'
import thebox from './assets/TheBox.svg'
import "./Header.css"
import "./Navigation.css"

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
          <img src={Symbls} className='header__BoxLogo' alt="Иконка кубика" />
        <button className='header__button'>
          <img src={thebox} alt="Надпись TheBox" />
        </button>
      </div>
      <div className='header__menu'>
        <ul>
          <li className='Home'><a href="#">Home</a></li>
          <li className='About'><a href="#">About Us</a></li>
          <li className='Projects'><a href="#">Projects</a></li>
          <li className='Services'><a href="#">Services</a></li>
          <li className='Contacts'><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}
=======
import Symbls from './assets/Random Symboles 3.png'
import thebox from './assets/TheBox.svg'
import "./HeaderTS.css"
import "./Navigation.css"

function HeaderTS() {
  return (
    <div className='header'>
      <div className='header__logo'>
          <img src={Symbls} className='header__BoxLogo' alt="Иконка кубика" />
        <button className='header__button'>
          <img src={thebox} alt="Надпись TheBox" />
        </button>
      </div>
      <div className='header__menu'>
        <ul>
          <li className='Home'><a href="#">Home</a></li>
          <li className='About'><a href="#">About Us</a></li>
          <li className='Projects'><a href="#">Projects</a></li>
          <li className='Services'><a href="#">Services</a></li>
          <li className='Contacts'><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderTS
>>>>>>> 5dafb63b0f827df0435e9881084f2f65bc3d6fee:src/HeaderTS.tsx
