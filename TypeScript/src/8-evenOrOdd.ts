// KYU: 8

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

export function evenOrOdd(n: number): string {
  // Any number divided by 2 without a remainder is even
  if (n % 2 == 0) {
    return "Even";
  }

  // If the above condition is false, the run this code
  return "Odd";
}
