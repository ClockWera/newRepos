import "./Services.css";

export const Services = () => {
  return (
    <div className="All__block">
      <p className="top__text">Services</p>
      <ul className="block__of__box">
        <li className="Construction__">
          <div>
            <img src="./servicespics/Construction.svg" alt="Construction pic" />
          </div>
          <div>
            <img src="./servicespics/white.svg" alt="white line svg image" />
          </div>
          <p>Construction</p>
        </li>
        <li className="Renovation__">
          <div>
            <img
              src="./servicespics/Renovation.svg"
              alt="Renovation svg image"
            />
          </div>
          <div>
            <img src="./servicespics/white.svg" alt="white line svg image" />
          </div>
          <p>Renovation</p>
        </li>
        <li className="Consultation__">
          <div>
            <img
              src="./servicespics/Consultation.svg"
              alt="Consultation svg image"
            />
          </div>
          <div>
            <img src="./servicespics/white.svg" alt="white line svg image" />
          </div>
          <p>Consultation</p>
        </li>
        <li className="Repair__">
          <div>
            <img
              src="./servicespics/Repair Services.svg"
              alt="Repair svg image"
            />
          </div>
          <div>
            <img src="./servicespics/white.svg" alt="white line svg image" />
          </div>
          <p>Repair Services</p>
        </li>
        <li className="Architecture__">
          <div>
            <img
              src="./servicespics/Architecture.svg"
              alt="Architecture svg image"
            />
          </div>
          <div>
            <img src="./servicespics/white.svg" alt="white line svg image" />
          </div>
          <p>Architecture</p>
        </li>
        <li className="Electric__">
          <div>
            <img src="./servicespics/Electric.svg" alt="Electric  svg image" />
          </div>
          <div>
            <img src="./servicespics/white.svg" alt="white line svg image" />
          </div>
          <p>Electric</p>
        </li>
      </ul>
    </div>
  );
};
