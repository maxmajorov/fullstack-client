import { AxiosError } from "axios";
import { ChatResponseType, chatSocketAPI } from "../../api/chatSocket-api";
import { AppRootStateType, AppThunk } from "../store";
// import { appSetStatusAC } from "./app-reducer";


const initialState = {
  messages: ['']
};

export const chatReducer = (
  state: InitialStateType = initialState,
  action: ChatActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "CHAT/messages-received": {
      return {
        ...state,
        messages: action.messages,
       
      };
    }

    case "CHAT/new-message-received": {
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
       
      };
    }
   

    default:
      return state;
  }
};

// ==== ACTIONS =====

export const getMessagesAC = (messages: any) =>
  ({ type: "CHAT/messages-received", messages } as const);

export const addNewMessageAC = (newMessage: string) =>
  ({ type: "CHAT/new-message-received", newMessage } as const);

// ==== THUNKS =====


export const createConnectionTC = (): AppThunk => async (dispatch) => {
  try {
    // dispatch(appSetStatusAC("loading"));
    const response = await chatSocketAPI.createConnectionTC();

    // dispatch(getMessagesAC(response.data));
  } catch (e) {
    const err = e as Error | AxiosError<{ error: string }>;
    console.log(err)
    // handleNetworkError(dispatch, err);
  } finally {
    // dispatch(appSetStatusAC("idle"));
  }
}

export const destroyConnectionTC = (): AppThunk => async (dispatch) => {
  try {
    // dispatch(appSetStatusAC("loading"));
    const response = await chatSocketAPI.destroyConnectionTC();

    // dispatch(getMessagesAC(response.data));
  } catch (e) {
    const err = e as Error | AxiosError<{ error: string }>;
    console.log(err)
    // handleNetworkError(dispatch, err);
  } finally {
    // dispatch(appSetStatusAC("idle"));
  }
}

export const getMessagesTC =
  (page: number, pageCount: number): AppThunk =>
  async (dispatch) => {
    // try {
    //   // dispatch(appSetStatusAC("loading"));
    //   const response = await getPacksAPI.getPacksList(page, pageCount);

    //   dispatch(getMessagesAC(response.data));
    // } catch (e) {
    //   const err = e as Error | AxiosError<{ error: string }>;
    //   // handleNetworkError(dispatch, err);
    // } finally {
    //   // dispatch(appSetStatusAC("idle"));
    // }
  };

// ==== SELECTORS ====

export const messagesSelect = (state: AppRootStateType) => state.chat.messages;


// ==== TYPES ====

export type InitialStateType = typeof initialState;
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

export type GetChatMessagesType = ReturnType<typeof getMessagesAC>;
export type AddNewMessageType = ReturnType<typeof addNewMessageAC>;


export type ChatActionsTypes =
  | GetChatMessagesType
  | AddNewMessageType