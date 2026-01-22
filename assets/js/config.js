window.dataLayer = window.dataLayer || [];
window.nextReady = window.nextReady || [];

window.nextConfig = {
  apiKey: "OfQiWTx7nsoC58VkziY9zC1PL3Sf0SrusM5tNRTy",
  debug: false,
  currencyBehavior: "manual",
  defaultCurrency: "USD",
  paymentConfig: {
    expressCheckout: {
      requireValidation: true,
      requiredFields: ["email", "fname", "lname"],
      methodOrder: ["paypal", "apple_pay", "google_pay"],
    },
  },
  addressConfig: {
    defaultCountry: "US",
    showCountries: ["US", "CA", "GB", "BR", "AU", "DE", "FR", "IT", "ES", "NL"],
    dontShowStates: ["AS", "GU", "PR", "VI"],
  },
  analytics: {
    enabled: true,
    mode: "auto",
  },
  utmTransfer: {
    enabled: true,
    applyToExternalLinks: false,
    debug: false,
  },
};
