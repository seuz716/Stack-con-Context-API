import { useContext } from "react";
import { usePosts } from "../context/postContext";

export function NotFoundPage() {
  const post = useContext(usePosts)
  console.log(post);
  return (

    <div>
      NotFoundPage
    </div >
  );
}
