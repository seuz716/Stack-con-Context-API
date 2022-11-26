import { createContext, useContext, useState } from "react";


const postContext = createContext();

export const usePosts= () =>{
    const Context = useContext(postContext)
    return Context
}

export const PostContainer = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <postContext.Provider
      value={{
        posts,
        setPosts
      }}
    >
      {children}
    </postContext.Provider>
  );
};
