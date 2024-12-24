const intl = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

export const priceConverter = (price) => intl.format(price);

export default function useCurrency(price) {
  return priceConverter(price);
}
