import "./Stats.css";

export const Stats = () => {
  return (
    <div className="stats__page">
      <div className="block__of__stats">
        <ul>
          <li className="handshake">
            <div>
              <img
                className="hands__icon"
                src="./satsIcons/handshake.svg"
                alt="handshake__icon"
              />
              <span>84</span>
              <img
                className="happy__clients"
                src="./satsIcons/Happy_clients.svg"
                alt="happy_clients icon"
              />
            </div>
          </li>
          <li className="paper">
            <img src="./satsIcons/paper.svg" alt="paper__icon" />
            <span>123</span>
            <img
              src="./satsIcons/Projects_completed.svg"
              alt="proj_completed icon"
            />
          </li>
          <li className="cup">
            <img src="./satsIcons/cup.svg" alt="cup__icon" />
            <span>37</span>
            <img src="./satsIcons/Awards_win.svg" alt="awards_win icon" />
          </li>
          <li className="scheme">
            <img src="./satsIcons/landscape.svg" alt="landscape__icon" />
            <span>30</span>
            <img
              src="./satsIcons/Years_in_business.svg"
              alt="years_in_business icon"
            />
          </li>
        </ul>
      </div>
      <div className="experience">
        <span className="years">30 Years Experience</span>
        <span className="company__constr">
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </span>
        <button>Contact Us</button>
      </div>
    </div>
  );
};
