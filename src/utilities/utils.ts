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

/**
 * 
 * @param classes tailwind css classes
 * @returns merged css classes
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}