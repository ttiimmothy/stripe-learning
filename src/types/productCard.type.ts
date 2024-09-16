import {ProductsFragmentFragment} from "@/generated/graphql/graphql";

export type ProductCardType = Omit<ProductsFragmentFragment, "author"> & {
  author: {
    _id: string;
    email: string;
    role: string;
  }
}