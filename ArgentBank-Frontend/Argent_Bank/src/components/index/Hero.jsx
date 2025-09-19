function Hero({ title, subtitle1, subtitle2, subtitle3, text }) {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">{title}</h2>
        <p className="subtitle">{subtitle1}</p>
        <p className="subtitle">{subtitle2}</p>
        <p className="subtitle">{subtitle3}</p>
        <p className="text">{text}</p>
      </section>
    </div>
  );
}
export default Hero;
