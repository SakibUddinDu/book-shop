import aboutImage from "../../assets/about-bookpress-1.png";
import { IoIosArrowDropright } from "react-icons/io";
<IoIosArrowDropright />;

function AboutBookPress() {
  return (
    <div className="hero min-h-[400px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">About BooksPress</h1>
          <p className="py-6 text-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ul>
            <li className="flex gap-2 items-center text-lg">
              <IoIosArrowDropright />
              Donec arcu dui, ultricies non sodales nec, faucibus ut ipsum.
              Vestibulum ante 
            </li>
            <li className="flex gap-2 items-center text-lg">
              <IoIosArrowDropright />
              Mauris ultrices ornare eleifend. Ut sollicitudin nibh vel tortor
              tristique
            </li>
            <li className="flex gap-2 items-center text-lg">
              <IoIosArrowDropright />
              Pellentesque eget dictum ligula. Morbi tristique sem tellus
            </li>
            <li className="flex gap-2 items-center text-lg">
              <IoIosArrowDropright />
              Pellentesque eget dictum ligula. Morbi tristique sem tellus
            </li>
            <li className="flex gap-2 items-center text-lg">
              <IoIosArrowDropright />
              Pellentesque eget dictum ligula. Morbi tristique sem tellus
            </li>
          </ul>

          <div className="mt-3">
            <a href="#" class="btn btn-primary btn-round">
              Learn More
            </a>
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-lg">
          <img src={aboutImage} className="max-w-lg rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
}

export default AboutBookPress;
