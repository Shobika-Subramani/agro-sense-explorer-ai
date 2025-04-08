
export type UserRole = 'farmer' | 'researcher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  farmId?: string; // only for farmers
}

export interface SoilData {
  id: string;
  timestamp: string;
  location: {
    latitude: number;
    longitude: number;
    name?: string;
  };
  npk: {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
  };
  ph: number;
  ec: number; // electrical conductivity
  moisture: number;
  temperature: number;
  humidity: number;
  airQuality: number;
  sunlight: number;
}

export interface Farm {
  id: string;
  name: string;
  ownerId: string;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  size: number; // in acres
  crops: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
