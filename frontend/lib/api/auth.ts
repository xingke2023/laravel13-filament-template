import { apiClient } from './client';
import type { AuthResponse, LoginCredentials, RegisterCredentials, User } from './types';

export const authApi = {
  register: (data: RegisterCredentials) =>
    apiClient.post<AuthResponse>('/auth/register', data),

  login: (data: LoginCredentials) =>
    apiClient.post<AuthResponse>('/auth/login', data),

  logout: (token: string) =>
    apiClient.post<{ message: string }>('/auth/logout', undefined, token),

  me: (token: string) =>
    apiClient.get<User>('/auth/me', token),
};
