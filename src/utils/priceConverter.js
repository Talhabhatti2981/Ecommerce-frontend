// Convert USD to PKR (approximate rate: 1 USD = 280 PKR)
export const usdToPkr = (usdAmount) => {
  const rate = 280;
  const pkrAmount = Math.round(usdAmount * rate);
  return `Rs. ${pkrAmount.toLocaleString('en-PK')}`;
};

// Convert price string like "$100" to "Rs. 28,000"
export const convertPriceToPKR = (priceString) => {
  if (!priceString) return '';
  
  // Extract number from price string
  const match = priceString.match(/\$?([\d,]+\.?\d*)/);
  if (!match) return priceString;
  
  const usdAmount = parseFloat(match[1].replace(/,/g, ''));
  return usdToPkr(usdAmount);
};

// Format PKR price
export const formatPKR = (amount) => {
  return `Rs. ${amount.toLocaleString('en-PK')}`;
};

