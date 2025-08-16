import * as React from "react";

export interface ReactComponentProps {
  children: React.ReactNode;
}

export interface GeneratedImageProps {
  imageUrl: string;
  prompt: string;
  width?: string;
  height?: string;
  action: (imagePath: string) => void;
}

export type RequestProps = {
  prompt: string;
};

export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">;

/**
 * 
TypeScript Type Assertions
 */
interface ApiResponse<T> {
  status: string;
  data: T;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (id: number): Promise<ApiResponse<User>> => {
  const response = await fetch(`https://api.example.com/users/${id}`);
  const data: ApiResponse<User> = await response.json();
  return data;
};

/*
Handling Status Codes
*/ 
const fetchUsers = async (id: number): Promise<User | null> => {
  const response = await fetch(`https://api.example.com/users/${id}`);
  if (response.status === 404) {
    console.error("User not found");
    return null;
  }
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  const data: User = await response.json();
  return data;
};

/*
Error Handling
*/