import { useEffect, useState } from "react";
import img from "../assets/heroImage.png";
import Card from "../components/shared/Card";
function Home() {
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    async function loader() {
      const res = await fetch("https://bookshop-backend-x3im.onrender.com/books");
      const data = await res.json();
      setBooksData(data);
    }
    loader();
  }, []);
  

  return (
    <>
      <div className="hero min-h-[400px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Get Your New Book With Best Price Find Your Book Now
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quam officia magni nesciunt alias tempore repellat
              ullam distinctio! Dignissimos autem, inventore similique nesciunt
              alias tempore repellat ullam distinctio! Dignissimos autem,
              inventore similique a aliquid nam?
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 mt-12 ">
        {booksData.map((book) => (
          <Card key={book._id} CardItem={book} />
        ))}
      </div>
    </>
  );
}

export default Home;
