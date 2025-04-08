
import { UserRole } from "@/types";

// Mock authentication - in a real application, this would connect to an auth service
let currentUser: {
  id: string;
  name: string;
  email: string;
  role: UserRole;
} | null = null;

const users = [
  { id: '1', email: 'farmer@example.com', password: 'password', name: 'John Farmer', role: 'farmer' as UserRole, farmId: '101' },
  { id: '2', email: 'researcher@example.com', password: 'password', name: 'Emma Researcher', role: 'researcher' as UserRole },
  { id: '3', email: 'admin@realvisionaries.com', password: 'admin123', name: 'Admin User', role: 'admin' as UserRole },
];

export const login = (email: string, password: string) => {
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    // In a real app, we would set a token in localStorage
    localStorage.setItem('agrosense_user', JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      farmId: user.farmId
    }));
    currentUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };
    return true;
  }
  
  return false;
};

export const logout = () => {
  localStorage.removeItem('agrosense_user');
  currentUser = null;
};

export const getCurrentUser = () => {
  if (currentUser) return currentUser;
  
  const storedUser = localStorage.getItem('agrosense_user');
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
    return currentUser;
  }
  
  return null;
};

export const isAuthenticated = () => {
  return getCurrentUser() !== null;
};

export const checkUserRole = (role: UserRole) => {
  const user = getCurrentUser();
  return user && user.role === role;
};
