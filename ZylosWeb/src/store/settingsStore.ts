import create from 'zustand';

interface SettingsState {
  wsConnected: boolean;
  ttsEnabled: boolean;
  setWsConnected: (status: boolean) => void;
  toggleTts: () => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  wsConnected: false,
  ttsEnabled: true,
  setWsConnected: (status) => set({ wsConnected: status }),
  toggleTts: () => set((state) => ({ ttsEnabled: !state.ttsEnabled })),
}));
