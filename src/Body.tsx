import "./Body.css";

export const Body = () => {
  return (
    <div className="back__Ground__firstPage">
      <p className="slogan">
        Building things<br></br> is our mission.
      </p>
      <div className="block__FP">
        <div className="text">
          <p className="text__FP">Feature Projects</p>
          <p className="text__TNUoA">The National University of Architecture</p>
        </div>
        <div className="arrows">
          <li>
            <button className="arrow__Left">
              <img src="./ArrowLeft.svg" alt="" />
              <span className="img__Left">Back</span>
            </button>
          </li>
          <li>
            <button className="arrow__Right">
              <span className="img__Right">Next</span>
              <img src="./ArrowRight.svg" alt="" />
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};
