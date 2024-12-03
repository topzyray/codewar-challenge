// KYU: 5

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// This function ensures rgb values are withing 0 and 255
export function validateNumber(N: number): number {
  if (N < 0) return 0;
  else if (N > 255) return 255;
  else return N;
}

// This function converts a number from base 10 to 16
export function numToHex(N: number): string {
  // Value number before conversion
  N = validateNumber(N);

  // Since number cannot be below 0, returns zero value for number 0
  if (N == 0) {
    return "00";
  }

  // Initializes a HEX value result with an empty string
  let hexResult = "";

  // Base 16 counting values where A=10, B=11, C=12, D=13, E=14, F=15
  let hexDigits = "0123456789ABCDEF";

  // Intialize a loop condition
  let i = 0;
  while (i <= N) {
    let remainder = N % 16;

    // Sets the value of each digit
    let hexDigit = hexDigits[remainder];

    // Concatenate each value with the HEX result
    hexResult = hexDigit + hexResult;

    // Floor division which return the nearest old number of N and assigns the value to N before next iteration
    N = Math.floor(N / 16);

    // Increment i by 1
    i++;
  }

  if (hexResult.length == 1) return "0" + hexResult;

  return hexResult;
}

export function rgb(r: number, g: number, b: number): string {
  let hex = numToHex(r) + numToHex(g) + numToHex(b);
  return hex;
}
