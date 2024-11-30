// KYU: 5

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

export function validateNumber(N: number): number {
  if (N < 0) return 0;
  else if (N > 255) return 255;
  else return N;
}

export function numToHex(N: number): string {
  N = validateNumber(N);

  if (N == 0) {
    return "00";
  }

  let hexResult = "";

  let hexDigits = "0123456789ABCDEF";

  let i = 0;
  while (i <= N) {
    let remainder = N % 16;
    let hexDigit = hexDigits[remainder];
    hexResult = hexDigit + hexResult;
    N = Math.floor(N / 16);
    i++;
  }

  if (hexResult.length == 1) return "0" + hexResult;

  return hexResult;
}

export function rgb(r: number, g: number, b: number): string {
  let hex = numToHex(r) + numToHex(g) + numToHex(b);
  return hex;
}
