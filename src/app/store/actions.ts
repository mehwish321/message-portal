import { createAction, props } from '@ngrx/store';
import { Message } from '../components/models/message.model';

export const loadMessages = createAction('[Messages] Load Messages');

export const loadMessagesSuccess = createAction(
  '[Messages] Load Messages Success',
  props<{ messages: Message[] }>()
);

export const loadMessagesFailure = createAction(
  '[Messages] Load Messages Failure',
  props<{ error: string }>()
);
