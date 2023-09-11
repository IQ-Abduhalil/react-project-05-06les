import "./homehero.scss";

const HomeHero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__left"></div>
        <div className="hero__right">
          <p className="hero__top-title">New Arrival</p>
          <h1 className="hero__title">Discover Our  New Collection</h1>
          <p className="hero__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="hero__btn">buy now</button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
