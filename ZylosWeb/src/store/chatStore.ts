import create from 'zustand';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatState {
  messages: Message[];
  isTyping: boolean;
  sendMessage: (text: string) => void;
  addBotMessage: (text: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isTyping: false,
  sendMessage: (text) => set((state) => ({ messages: [...state.messages, { text, sender: 'user' }]})),
  addBotMessage: (text) => set((state) => ({ messages: [...state.messages, { text, sender: 'bot' }], isTyping: false })),
}));
