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
          <li className='item item-1'><a href="#">Home</a></li>
          <li className='item item-2'><a href="#">About Us</a></li>
          <li className='item item-3'><a href="#">Projects</a></li>
          <li className='item item-4'><a href="#">Services</a></li>
          <li className='item item-5'><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}
