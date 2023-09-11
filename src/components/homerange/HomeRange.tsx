import "./homerange.scss";
import Range1 from "../../assets/Images/range1.png";
import Range2 from "../../assets/Images/range2.png";
import Range3 from "../../assets/Images/range3.png";
const HomeRange = () => {
  return (
    <section className="container">
      <div className="range">
        <h3 className="range__title">Browse The Range</h3>
        <p className="range__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="range__cards">
          <div className="range__card">
            <img className="range__card-img" src={Range1} alt="image" />
            <p className="range__card-text">Dining</p>
          </div>
          <div className="range__card">
            <img className="range__card-img" src={Range2} alt="image" />
            <p className="range__card-text">Living</p>
          </div>
          <div className="range__card">
            <img className="range__card-img" src={Range3} alt="image" />
            <p className="range__card-text">Bedroom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRange;
