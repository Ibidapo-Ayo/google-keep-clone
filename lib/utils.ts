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

export const noteDefault = {
  title: "",
  text: "",
  reminder: "",
  collaborator: [],
  bgColor: "",
  images: [],
  archive: false,
  pinned: false,
  isAList: false,
  listValue: [{
    text: "",
    completed: false
  }]
}