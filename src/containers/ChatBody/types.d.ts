interface ChatState {
  loading: boolean; 
  error: boolean;
  messages: Message[] | null;
}

interface Message {
  id: string;
  text: string;
  time: string;
  senderId: string;
  receiverId: string;
}

export { ChatState };
