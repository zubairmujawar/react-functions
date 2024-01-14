import React, { useReducer } from "react";
import { createContext } from "react";

const DEFAULT_CONTEXT = {
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
}
const PostList = createContext( DEFAULT_CONTEXT);

const postListReducer = (currentPosstList, action)=>{}
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(currentPosstList, DEFAULT_CONTEXT);
  // KG codding 10h:40min
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        // postList: postList,
        // addPost: addPost,
        // deletePost:deletePost
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
