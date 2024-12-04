// KYU: 5

// ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

// An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

// For example:

// ISBN     : 1 1 1 2 2 2 3 3 3  9
// position : 1 2 3 4 5 6 7 8 9 10
// This is a valid ISBN, because:

// (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
// Examples
// 1112223339   -->  true
// 111222333    -->  false
// 1112223339X  -->  false
// 1234554321   -->  true
// 1234512345   -->  false
// 048665088X   -->  true
// X123456788   -->  false

export function validISBN10(isbn: string): boolean {
  // Ensure ISBN is 10 digit long
  if (isbn.length !== 10) return false;

  // Convert isbn string into array
  let isbnArrOfString = isbn.split("");

  // Convert last item to 10 if it is X
  if (isbnArrOfString[isbnArrOfString.length - 1].toUpperCase() == "X")
    isbnArrOfString[isbnArrOfString.length - 1] = "10";

  // Initialize a new binding with an empty array which will accept only numbers
  let isbnArrOfNumber: number[] = [];

  for (let i = 0; i < isbnArrOfString.length; i++) {
    // Validating last item of the list
    if (typeof +isbnArrOfString[i] != "number" || isNaN(+isbnArrOfString[i])) {
      return false;
    } else {
      // Populating isbnArrOfNumber if the earlier check fails
      isbnArrOfNumber.push(+isbnArrOfString[i]);
    }
  }

  let totalValueOfISBN: number = 0;

  for (let i = 0; i < isbnArrOfNumber.length; i++) {
    totalValueOfISBN += isbnArrOfNumber[i] * (i + 1);
  }

  let remainder: number = totalValueOfISBN % 11;

  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
