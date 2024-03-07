import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 *
 * @param inputs tailwind and css classes
 * @returns merged css classes and conflicting tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
