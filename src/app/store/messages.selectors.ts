import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessageState } from './messages.reducer';

export const selectMessageState = createFeatureSelector<MessageState>('messages');

export const selectMessages = createSelector(
  selectMessageState,
  (state: MessageState) => state.messages
);

export const selectMessagesLoading = createSelector(
  selectMessageState,
  (state: MessageState) => state.loading
);

export const selectMessagesError = createSelector(
  selectMessageState,
  (state: MessageState) => state.error
);
