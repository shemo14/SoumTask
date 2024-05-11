export interface Variant {
  id: string;
  storage: string;
}

export interface Model {
  id: string;
  name: string;
  variants: Variant[];
}

export interface Brand {
  id: string;
  name: string;
  models: Model[];
}

export interface Product {
  id: string;
  category: string;
  brands: Brand[];
}
