export type FilterState = {
  category: string;
  color: string;
  priceRange: {
    label: string;
    min: number;
    max: number;
  };
};

export type Filters = {
  categories: string[];
  colors: string[];
  priceRanges: {
    label: string;
    min: number;
    max: number;
  }[];
};