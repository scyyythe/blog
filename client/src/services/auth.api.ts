import { apiService, ApiResponse } from './api.service';

// Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials extends LoginCredentials {
  username: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

class AuthApi {
  private readonly BASE_PATH = '/auth';

  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
    return apiService.post<AuthResponse>(`${this.BASE_PATH}/login`, credentials);
  }

  async signup(credentials: SignupCredentials): Promise<ApiResponse<AuthResponse>> {
    return apiService.post<AuthResponse>(`${this.BASE_PATH}/signup`, credentials);
  }

  async logout(): Promise<ApiResponse<void>> {
    return apiService.post(`${this.BASE_PATH}/logout`);
  }

  async verifyToken(): Promise<ApiResponse<{ valid: boolean }>> {
    return apiService.get(`${this.BASE_PATH}/verify`);
  }
}

export const authApi = new AuthApi();