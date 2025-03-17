import { Message } from "../components/models/message.model";


export interface MessagesState {
  messages: Message[];    // Array to hold the list of messages
  loading: boolean;       // Flag to indicate if messages are being loaded
  error: string | null;   // Error message if there is an error while loading
}

export const initialMessagesState: MessagesState = {
  messages: [],
  loading: false,
  error: null,
};