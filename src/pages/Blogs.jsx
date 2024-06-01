import Blog from "../components/blogs/Blog";
import Banner from "../components/shared/Banner";
const blogsData = [
    {
      "name": "Slow Horses (Deluxe Edition)",
      "author": "Mick Herron",
      "thumbnail": "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
      
      "rating": 3,
      "featured": false,
      'description':' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci id, porro dolorum rem ex, facere error tempora, unde ipsa sapiente aspernatur iste fugiat ipsam! Laudantium aut sequi sapiente facilis!',
      "id": "3ca9bc9a-63d4-4bed-ae64-8910880016a2"
    },
    {
      "name": "The Last Thing He Told ME",
      "author": "Laura Dave",
      "thumbnail": "https://m.media-amazon.com/images/P/1501171348.01._SCLZZZZZZZ_SX500_.jpg",
   
      "rating": "4",
      "featured": false,
      'description':' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci id, porro dolorum rem ex, facere error tempora, unde ipsa sapiente aspernatur iste fugiat ipsam! Laudantium aut sequi sapiente facilis!',
      "id": "a046cd38-3a8e-4aeb-9195-c4e136adeb7b"
    },
    {
      "name": "JavaScript: The Definitive Guide",
      "author": "Marijn Havarbeke",
      "thumbnail": "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY327_FMwebp_QL65_.jpg",
      "rating": "5",
      "featured": false,
      'description':' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci id, porro dolorum rem ex, facere error tempora, unde ipsa sapiente aspernatur iste fugiat ipsam! Laudantium aut sequi sapiente facilis!',
    },
    {
      "name": "JavaScript from Beginner to Professional",
      "author": " Laurence Lars Svekis",
      "thumbnail": "https://m.media-amazon.com/images/I/71oZ45OrLjL._SY425_.jpg",
        "rating": "4",
      "featured": true,
      'description':' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci id, porro dolorum rem ex, facere error tempora, unde ipsa sapiente aspernatur iste fugiat ipsam! Laudantium aut sequi sapiente facilis!',
      "id": "2e9aab2c-8c83-44d5-b384-81491bcd6d43"
    },
    {
      "name": "JavaScript All-in-One For Dummies",
      "author": "Chris Minnick ",
      "thumbnail": "https://m.media-amazon.com/images/I/81ycHtBjMWL._AC_UY327_FMwebp_QL65_.jpg",
      "rating": "5",
      "featured": true,
      'description':' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci id, porro dolorum rem ex, facere error tempora, unde ipsa sapiente aspernatur iste fugiat ipsam! Laudantium aut sequi sapiente facilis!',
      "id": "66686765-97ac-499b-baae-87c1b1bc6795"
    }
  ]
function Blogs() {
    
  return (
    <div>
      <Banner />
      <div className="flex gap-5 mt-12"> 
      {
        blogsData.map((blog)=><Blog blog={blog}/>)
      }
      </div>
    </div>
  );
}

export default Blogs;
