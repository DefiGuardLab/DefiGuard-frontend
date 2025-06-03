import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes efficiently.
 * Uses clsx for conditional class joining and tailwind-merge to handle conflicting Tailwind classes.
 *
 * @param inputs - Class values to be combined (strings, objects, arrays, etc.)
 * @returns A string of combined and optimized class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as a currency string
 *
 * @param value - The number to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns A formatted currency string
 */
export function formatCurrency(value: number, currency = "USD", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value)
}

/**
 * Debounces a function call
 *
 * @param fn - The function to debounce
 * @param delay - The delay in milliseconds
 * @returns A debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn(...args)
      timeoutId = null
    }, delay)
  }
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 *
 * @param str - The string to truncate
 * @param length - The maximum length (default: 50)
 * @returns The truncated string
 */
export function truncateString(str: string, length = 50): string {
  if (str.length <= length) return str
  return `${str.slice(0, length)}...`
}
