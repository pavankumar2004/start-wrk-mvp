export interface User {
    id: number;
    email: string;
    full_name: string;
    business_name: string;
    business_address?: string;
    phone_number?: string;
    timezone?: string;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface UserInput {
    email: string;
    password: string;
    full_name: string;
    business_name: string;
    business_address?: string;
    phone_number?: string;
    timezone?: string;
  }
  