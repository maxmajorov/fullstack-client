import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ActionsType, postsReducer } from "./app-reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ActionsType
>;
export const useAppDispatch = () => useDispatch<useAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//@ts-ignore
window.store = store;
