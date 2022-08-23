function calculateTax(income: number, taxYear?: number): number { // return number by typing : number
  // add '?' to taxYear if you want it optional.

  // if (income < 50_000)
  if ((taxYear || 2022) < 2022)
    return income * 1.2;
  // undefined if it's greater than 50,000
  return income * 1.3;
}

function calculateTax2(income: number, taxYear = 2022): number { // return number by typing : number
  // taxYear is a default value

  // if (income < 50_000)
  if (taxYear < 2022)
    return income * 1.2;
  return income * 1.3;
}

// always properly annotate your values and variables

calculateTax(10_000, 2022);