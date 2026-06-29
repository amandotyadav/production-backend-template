export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiError {
  code: string;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  error: ApiError;
}
