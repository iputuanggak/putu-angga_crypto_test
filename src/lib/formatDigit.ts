export function formatDigit(amount: number): string {
  return new Intl.NumberFormat("en-US", {}).format(amount);
}

export function formatDigitWithAbbr(amount: number): string {
  return new Intl.NumberFormat("id", { notation: "compact" }).format(amount);
}
