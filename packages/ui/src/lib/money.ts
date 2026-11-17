const withDecimals = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" });
const wholePesos = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

/**
 * Formats an amount in pesos as ARS: "$ 23.890,00", or "$ 23.890" with `decimals: false`.
 * The space after "$" is a non-breaking space, so the sign never wraps alone.
 */
export function formatARS(amount: number, { decimals = true }: { decimals?: boolean } = {}) {
  return (decimals ? withDecimals : wholePesos).format(amount);
}
