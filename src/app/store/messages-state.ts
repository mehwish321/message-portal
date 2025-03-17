export interface MessagesState {
  messages: MessagesState[];
  loading: boolean;
  error: string | null;
}

export const initialMessagesState: MessagesState = {
  messages: [],
  loading: false,
  error: null,
};