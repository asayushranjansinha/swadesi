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

export function formatQuantityAndPrice(totalQuantity: number, totalPrice: number, unit: string): string {
  if (totalQuantity <= 0 || totalPrice <= 0) {
    throw new Error("Total quantity and total price must be greater than zero");
  }

  const pricePerUnit = totalPrice / totalQuantity;
  const formattedPrice = pricePerUnit.toFixed(2);
  const result = `${formattedPrice} / ${unit}`;

  return result;
}

export function truncateString(inputString: string, threshold: number): string {
  if (inputString.length <= threshold) {
    return inputString;
  } else {
    return inputString.slice(0, threshold) + '...';
  }
}