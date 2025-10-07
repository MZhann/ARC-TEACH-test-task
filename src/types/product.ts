export interface ProductDescription {
  type: string;             // "coffee"
  roastLevel: number;       // 3 stars / 5 "Прожарка"
  form: string;             // "зерна" / "молотый"
  volume: string;           // "500g"
  originCountry: string;    // "South America"
  madeIn: string;           // "Mexico"
  contains: string;         // "100% arabica"
}

export interface Product {
  id: string;
  articul: string;
  name: string;
  description: string;
  weight: string;
  price: number;
  image_url: string;
  available: boolean;
  amountInStore: number;
  details: ProductDescription;
}
