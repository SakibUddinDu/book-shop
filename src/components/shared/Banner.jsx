import AboutHero from "../../assets/treatment5.jpg";
function Banner() {
  return (
    <div
      className="hero min-h-[150px]"
      style={{
        backgroundImage: `url(${AboutHero})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">About</h1>
          <p className="">Home / About</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
