export interface User {
  id: string;
  name: string;
  email: string;
}

export type ApiResponse<T> =
  | { success: false; error: string }
  | {
      success: true;
      data: T;
    };

export type UserResponse = ApiResponse<User>;
export type UsersResponse = ApiResponse<User[]>;
