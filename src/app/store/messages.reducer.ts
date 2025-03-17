import { createReducer, on } from '@ngrx/store';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure } from './actions';
import { Message } from '../components/models/message.model';
export interface MessageState {
  messages: Message[];
  loading: boolean;
  error: string | null;
}

export const initialState: MessageState = {
  messages: [],
  loading: false,
  error: null,
};

export const messageReducer = createReducer(
  initialState,
  on(loadMessages, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    messages,
    loading: false,
  })),
  on(loadMessagesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
