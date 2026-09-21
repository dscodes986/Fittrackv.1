import axios, { AxiosInstance } from 'axios';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../store/authStore';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor for auth token
    this.client.interceptors.request.use(async (config) => {
      const token = await this.getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Add response interceptor for token refresh
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = await this.getRefreshToken();
            if (!refreshToken) {
              this.logout();
              throw new Error('No refresh token available');
            }

            const response = await axios.post(`${API_URL}/auth/refresh`, {
              refreshToken,
            });

            const { accessToken, refreshToken: newRefreshToken } = response.data;
            await this.saveTokens(accessToken, newRefreshToken);

            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return this.client(originalRequest);
          } catch (refreshError) {
            this.logout();
            throw refreshError;
          }
        }

        return Promise.reject(error);
      }
    );
  }

  private async saveTokens(accessToken: string, refreshToken: string) {
    try {
      await Promise.all([
        AsyncStorage.setItem('accessToken', accessToken),
        AsyncStorage.setItem('refreshToken', refreshToken),
      ]);
    } catch (error) {
      console.error('Failed to save tokens:', error);
    }
  }

  private async getAccessToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem('accessToken');
    } catch (error) {
      console.error('Failed to get access token:', error);
      return null;
    }
  }

  private async getRefreshToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem('refreshToken');
    } catch (error) {
      console.error('Failed to get refresh token:', error);
      return null;
    }
  }

  private logout() {
    const { logout } = useAuthStore.getState();
    logout();
  }

  public getInstance() {
    return this.client;
  }

  // Auth endpoints
  public async register(email: string, password: string, name?: string) {
    return this.client.post('/auth/register', { email, password, name });
  }

  public async login(email: string, password: string) {
    return this.client.post('/auth/login', { email, password });
  }

  public async refreshToken(refreshToken: string) {
    return this.client.post('/auth/refresh', { refreshToken });
  }

  // User endpoints
  public async getProfile() {
    return this.client.get('/users/me');
  }

  public async updateProfile(data: any) {
    return this.client.patch('/users/me', data);
  }

  public async getSettings() {
    return this.client.get('/users/me/settings');
  }

  public async updateSettings(data: any) {
    return this.client.patch('/users/me/settings', data);
  }

  public async deleteAccount() {
    return this.client.delete('/users/me');
  }
}

export const apiClient = new ApiClient();
