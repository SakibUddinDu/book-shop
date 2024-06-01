import img from "../assets/heroImage.png"
function Home() {
  return (
    <div className="hero min-h-[400px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Get Your New Book With Best Price Find Your Book Now</h1>
          <p className="py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam officia magni nesciunt alias tempore repellat ullam distinctio! Dignissimos autem, inventore similique  nesciunt alias tempore repellat ullam distinctio! Dignissimos autem, inventore similique a aliquid nam?
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
