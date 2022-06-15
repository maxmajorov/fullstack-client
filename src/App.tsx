import React, { useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./store/store";
import { getPostsTC, updatePostTC } from "./store/app-reducer";

// Types
export type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

// Api
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const postsAPI = {
  getPosts() {
    return instance.get<PostType[]>("posts?_limit=15");
  },
  updatePostTitle(post: PostType) {
    return instance.put<PostType>(`posts/${post.id}`, post);
  },
};

// App
export const App = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsTC());
  }, []);

  const updatePostHandler = (postId: number) => {
    dispatch(updatePostTC(postId));
  };

  return (
    <>
      <h1>📜 Список постов</h1>
      {posts.map((p) => {
        return (
          <div key={p.id}>
            <b>title</b>: {p.title}
            <button onClick={() => updatePostHandler(p.id)}>
              Обновить пост
            </button>
          </div>
        );
      })}
    </>
  );
};
