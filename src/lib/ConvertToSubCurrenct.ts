// Convert to subcurrency (e.g., convert dollars to cents)
export default function convertToSubCurrency(amount: number, factor = 100): number {
    return Math.round(amount * factor); // Multiplies the amount by 100 to convert to subcurrency
  }
  