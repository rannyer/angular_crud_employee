export interface ApiResponse<T> {
  message?: string;
  data: T;
}

export interface Employee {
  id?: string;
  name: string;
  email: string;
  mobile: string;
  dob: string;
  doj: string;
}
