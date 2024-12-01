import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const autoGrow = (textarea: React.MutableRefObject<HTMLTextAreaElement | null>) => {
  const { current } = textarea
  if (current) {
    current.style.height = "auto",
      current.style.height = current.scrollHeight + "px"
  }
}

export function generateUniqueId(length = 20) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export const colors = [
  "#f2e9e4",
  "#f5c9b3",
  "#f8d7ba",
  "#e0f2d9",
  "#d2e9f0",
  "#c6d9f5",
  "#d9c9f5",
  "#f5e6d6",
  "#f5f5f5"
];