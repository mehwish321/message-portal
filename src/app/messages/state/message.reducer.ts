import { createReducer, on } from '@ngrx/store';
import { Message } from '../message.model';
import * as MessageActions from './message.actions';

export interface MessageState {
  messages: Message[];
  loading: boolean;
  error: string | null;
}

export const initialState: MessageState = {
  messages: [],
  loading: false,
  error: null
};

export const messageReducer = createReducer(
  initialState,
  on(MessageActions.loadMessages, state => ({ ...state, loading: true })),
  on(MessageActions.loadMessagesSuccess, (state, { messages }) => ({ ...state, loading: false, messages })),
  on(MessageActions.loadMessagesFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(MessageActions.addMessageSuccess, (state, { message }) => ({ ...state, messages: [...state.messages, message] }))
);
