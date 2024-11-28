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