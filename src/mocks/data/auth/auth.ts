import type { LoginResponse, User } from '@shared/api';

export const mockUser: User = {
  id: 1,
  username: 'admin',
  email: 'admin@example.com',
  full_name: 'Администратор Системы',
  role: 'admin',
};

export const mockLoginResponse: LoginResponse = {
  user: mockUser,
  access_token: 'mock_jwt_token_abc123',
  refresh_token: 'mock_refresh_token_xyz789',
  expires_in: 3600,
};
