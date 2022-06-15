import { postsAPI, PostType } from "../App";
import { AppThunk, RootState } from "./store";

export const initState = [] as PostType[];

type InitStateType = typeof initState;

export const postsReducer = (
  state: InitStateType = initState,
  action: ActionsType
) => {
  switch (action.type) {
    case "POSTS/GET-POSTS":
      return action.posts;

    case "POSTS/UPDATE-POST-TITLE":
      return state.map((p) => {
        if (p.id === action.post.id) {
          return { ...p, title: action.post.title };
        } else {
          return p;
        }
      });

    default:
      return state;
  }
};

const getPostsAC = (posts: PostType[]) =>
  ({ type: "POSTS/GET-POSTS", posts } as const);
const updatePostTitleAC = (post: PostType) =>
  ({ type: "POSTS/UPDATE-POST-TITLE", post } as const);

export type ActionsType =
  | ReturnType<typeof getPostsAC>
  | ReturnType<typeof updatePostTitleAC>;

export const getPostsTC = (): AppThunk => (dispatch) => {
  postsAPI.getPosts().then((res) => {
    dispatch(getPostsAC(res.data));
  });
};

export const updatePostTC =
  (postId: number): AppThunk =>
  (dispatch, getState: () => RootState) => {
    console.log(getState());
    try {
      const currentPost = getState().posts.find((p: PostType) => {
        return p.id === postId;
      });

      if (currentPost) {
        const payload = { ...currentPost, title: "Летим 🚀" };
        postsAPI.updatePostTitle(payload).then((res) => {
          dispatch(updatePostTitleAC(res.data));
        });
      }
    } catch (e) {
      alert("Обновить пост не удалось 😢");
    }
  };
