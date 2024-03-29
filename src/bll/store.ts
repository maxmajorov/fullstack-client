import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ChatActionsTypes, chatReducer } from "./reducers/chat-reducer";

let rootReducer = combineReducers({
  chat: chatReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType = ChatActionsTypes;

// SELECTOR TYPE

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;

// DISPATCH TYPE & DISPATCH

export type useAppDispatchType = ThunkDispatch<
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
export const useAppDispatch = () => useDispatch<useAppDispatchType>();

// THUNK TYPE

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>;

//@ts-ignore
window.store = store;
