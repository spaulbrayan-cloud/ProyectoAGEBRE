import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // @ts-ignore - twMerge is installed via tailwind-variants ecosystem
  return twMerge(clsx(inputs));
}
