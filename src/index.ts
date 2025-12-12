/**
 * Number Base Converter
 * Convert numbers between bases
 *
 * Online tool: https://devtools.at/tools/number-base-converter
 *
 * @packageDocumentation
 */

function isValidForBase(value: string, base: number): boolean {
  if (!value || value === "-") return false;

  const isNegative = value.startsWith("-");
  const numPart = isNegative ? value.slice(1) : value;

  if (!numPart) return false;

  for (const char of numPart.toUpperCase()) {
    const code = char.charCodeAt(0);
    if (code >= 48 && code <= 57) {
      // Digit 0-9
      if (parseInt(char) >= base) return false;
    } else if (code >= 65 && code <= 90) {
      // Letter A-Z
      const digitValue = code - 65 + 10;
      if (digitValue >= base) return false;
    } else {
      return false;
    }
  }

  return true;
}

function convertFromBase(value: string, fromBase: number): bigint | null {
  if (!isValidForBase(value, fromBase)) return null;

  try {
    const isNegative = value.startsWith("-");
    const numPart = isNegative ? value.slice(1) : value;

    let result = BigInt(0);
    const baseBigInt = BigInt(fromBase);

    for (const char of numPart.toUpperCase()) {
      const code = char.charCodeAt(0);
      let digitValue: number;

      if (code >= 48 && code <= 57) {
        digitValue = code - 48; // 0-9
      } else {
        digitValue = code - 65 + 10; // A-Z
      }

      result = result * baseBigInt + BigInt(digitValue);
    }

    return isNegative ? -result : result;
  } catch {
    return null;
  }
}

function convertToBase(value: bigint, toBase: number): string {
  if (value === BigInt(0)) return "0";

  const isNegative = value < BigInt(0);
  let num = isNegative ? -value : value;
  const baseBigInt = BigInt(toBase);

  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  while (num > BigInt(0)) {
    const remainder = Number(num % baseBigInt);
    result = digits[remainder] + result;
    num = num / baseBigInt;
  }

  return isNegative ? "-" + result : result;
}

// Export for convenience
export default { encode, decode };
