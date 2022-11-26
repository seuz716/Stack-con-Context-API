import { useContext } from "react";
import { usePosts } from "../context/postContext";



export function HomePage() {
 
const myContext =useContext(usePosts)
const { posts } = usePosts();
console.log(myContext);
console.log(posts);

  return (
    <>
    <div>
      HomePage
      <div>
        <button type="button" className="btn btn-warning" onClick={function name(params) {
          
        }} >
          Add
        </button>
      </div>
    </div>
  </>
  );
}
