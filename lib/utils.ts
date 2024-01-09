import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function changeInPercentage(current: number, previous: number): number {
  return ((current - previous) / previous) * 100;
}

export function getRandomHexColor() {
  // Generate a random integer between 0 and 16777215 (FFFFFF in hexadecimal)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Pad the color with zeros if needed
  return `#${randomColor.padStart(6, '0')}`;
}

export function getRandomPercentage() {
  return Math.floor(Math.random() * 100) + 1;
}