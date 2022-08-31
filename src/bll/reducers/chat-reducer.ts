import { AxiosError } from "axios";
import {
  ChatResponseType,
  chatSocketAPI,
  UserType,
} from "../../api/chatSocket-api";
import { AppRootStateType, AppThunk } from "../store";
// import { appSetStatusAC } from "./app-reducer";

const initialState = {
  messages: [
    {
      _id: "",
      message: "",
      user: {
        _id: "",
        name: "",
      },
    },
  ],
  typingUsers: [{ _id: "", name: "" }],
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
        typingUsers: state.typingUsers.filter(
          (user) => user._id !== action.newMessage.user._id
        ),
      };
    }

    case "CHAT/set-typing-user": {
      return {
        ...state,
        typingUsers: [
          ...state.typingUsers.filter((user) => user._id !== action.user._id),
          action.user,
        ],
      };
    }

    default:
      return state;
  }
};

// ==== ACTIONS =====

export const getMessagesAC = (messages: ChatResponseType) =>
  ({ type: "CHAT/messages-received", messages } as const);

export const addNewMessageAC = (newMessage: ChatResponseType) =>
  ({ type: "CHAT/new-message-received", newMessage } as const);

export const typingUserAC = (user: UserType) =>
  ({ type: "CHAT/set-typing-user", user } as const);

// ==== THUNKS =====

export const createConnectionTC = (): AppThunk => async (dispatch) => {
  try {
    // dispatch(appSetStatusAC("loading"));
    const response = await chatSocketAPI.createConnectionTC();
    chatSocketAPI.subscribe(
      (messages: any) => {
        dispatch(getMessagesAC(messages));
      },
      (newMessage: any) => {
        dispatch(addNewMessageAC(newMessage));
      },
      (user: UserType) => {
        dispatch(typingUserAC(user));
      }
    );
  } catch (e) {
    const err = e as Error | AxiosError<{ error: string }>;
    console.log(err);
    // handleNetworkError(dispatch, err);
  } finally {
    // dispatch(appSetStatusAC("idle"));
  }
};

export const destroyConnectionTC = (): AppThunk => async (dispatch) => {
  try {
    // dispatch(appSetStatusAC("loading"));
    const response = await chatSocketAPI.destroyConnectionTC();

    // dispatch(getMessagesAC(response.data));
  } catch (e) {
    const err = e as Error | AxiosError<{ error: string }>;
    console.log(err);
    // handleNetworkError(dispatch, err);
  } finally {
    // dispatch(appSetStatusAC("idle"));
  }
};

export const setClientNameTC =
  (name: string): AppThunk =>
  async (dispatch) => {
    try {
      // dispatch(appSetStatusAC("loading"));
      await chatSocketAPI.sendName(name);
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>;
      // handleNetworkError(dispatch, err);
    } finally {
      // dispatch(appSetStatusAC("idle"));
    }
  };

export const sendMessageTC =
  (newMessage: string): AppThunk =>
  async (dispatch) => {
    try {
      // dispatch(appSetStatusAC("loading"));
      await chatSocketAPI.sendMessage(newMessage);
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>;
      // handleNetworkError(dispatch, err);
    } finally {
      // dispatch(appSetStatusAC("idle"));
    }
  };

export const typingTextTC = (): AppThunk => async (dispatch) => {
  try {
    await chatSocketAPI.typingText();
  } catch (e) {
    const err = e as Error | AxiosError<{ error: string }>;
  }
};

// ==== SELECTORS ====

export const messagesSelect = (state: AppRootStateType) => state.chat.messages;
export const typingUsersSelect = (state: AppRootStateType) =>
  state.chat.typingUsers;

// ==== TYPES ====

export type InitialStateType = typeof initialState;
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

export type GetChatMessagesType = ReturnType<typeof getMessagesAC>;
export type AddNewMessageType = ReturnType<typeof addNewMessageAC>;
export type TypingUserType = ReturnType<typeof typingUserAC>;

export type ChatActionsTypes =
  | GetChatMessagesType
  | AddNewMessageType
  | TypingUserType;
