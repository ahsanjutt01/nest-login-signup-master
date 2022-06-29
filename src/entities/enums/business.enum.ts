enum DateFormat {
  YYYY_MM_DD = "YYYY/MM/DD",
  MM_DD_YYYY = "MM/DD/YYYY",
  DD_MM_YYYY = "DD/MM/YYYY",
}
enum CurrencyFormat {
  PKR = 1,
  USD = 2,
}

enum Taxable {
  NON_TAX = 0,
  TAX = 1,
  TAX_CLASSES = 2,
  PRODUCT_BASE = 3,
}
export { DateFormat, CurrencyFormat, Taxable };
