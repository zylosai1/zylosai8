import { useSettingsStore } from '../store/settingsStore';

const getApiBase = () => useSettingsStore.getState().apiBaseUrl;

export const login = async (password: string) => {
  const response = await fetch(`${getApiBase()}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });
  return response.json();
};

export const sendTextMessage = async (text: string) => {
  const { userId, deviceId } = useSettingsStore.getState();
  const response = await fetch(`${getApiBase()}/api/chat/text`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, user_id: userId, device_id: deviceId }),
    }
  );
  return response.json();
};

export const getMemoryHistory = async () => {
  const { userId, deviceId } = useSettingsStore.getState();
  const response = await fetch(
    `${getApiBase()}/api/memory/history?user_id=${userId}&device_id=${deviceId}`
  );
  return response.json();
};

export const addMemory = async (text: string) => {
  const { userId, deviceId } = useSettingsStore.getState();
  const response = await fetch(`${getApiBase()}/api/memory/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, user_id: userId, device_id: deviceId }),
  });
  return response.json();
};
