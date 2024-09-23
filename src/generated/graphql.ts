export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CheckoutProductInput = {
  products: Array<Products>;
};

export type CheckoutResponse = {
  id: Scalars['String']['output'];
};

export type CreateProductInput = {
  author: Scalars['ID']['input'];
  category: Scalars['String']['input'];
  color: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  oldPrice: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  rating: InputMaybe<Scalars['Float']['input']>;
};

export type CreateReviewInput = {
  comment: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Float']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateReviewResponse = {
  message: Scalars['String']['output'];
  reviews: Array<Review>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserResponse = {
  message: Scalars['String']['output'];
};

export type DeleteProductResponse = {
  message: Scalars['String']['output'];
};

export type DeleteUserResponse = {
  message: Scalars['String']['output'];
};

export type EditProfileInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  profession: InputMaybe<Scalars['String']['input']>;
  profilePicture: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  username: InputMaybe<Scalars['String']['input']>;
};

export type EditProfileResponse = {
  message: Scalars['String']['output'];
  user: User;
};

export type GetProductResponse = {
  product: ProductType;
  reviews: Array<ReviewsType>;
};

export type GetProductsInput = {
  category: InputMaybe<Scalars['String']['input']>;
  color: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['String']['input']>;
  maxPrice: InputMaybe<Scalars['String']['input']>;
  minPrice: InputMaybe<Scalars['String']['input']>;
  page: InputMaybe<Scalars['String']['input']>;
};

export type GetProductsResponse = {
  products: Array<ProductType>;
  totalPages: Scalars['Float']['output'];
  totalProducts: Scalars['Float']['output'];
};

export type GetProductsSearchInput = {
  limit: InputMaybe<Scalars['String']['input']>;
  page: InputMaybe<Scalars['String']['input']>;
  searchQuery: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponse = {
  message: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LogoutResponse = {
  message: Scalars['String']['output'];
};

export type Mutation = {
  checkout: CheckoutResponse;
  create: CreateReviewResponse;
  createProduct: Product;
  createUser: CreateUserResponse;
  deleteProduct: DeleteProductResponse;
  deleteUser: DeleteUserResponse;
  editProfile: EditProfileResponse;
  login: LoginResponse;
  logout: LogoutResponse;
  updateProduct: UpdateProductResponse;
  updateUserRole: UpdateUserRoleResponse;
};


export type MutationCheckoutArgs = {
  checkoutProducts: CheckoutProductInput;
};


export type MutationCreateArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteProductArgs = {
  productId: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationEditProfileArgs = {
  editProfileInput: EditProfileInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateProductArgs = {
  productId: Scalars['String']['input'];
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateUserRoleArgs = {
  updateUserRoleInput: UpdateUserRoleInput;
};

export type OrderUser = {
  _id: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  role: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Product = {
  _id: Scalars['ID']['output'];
  author: Scalars['ID']['output'];
  category: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  oldPrice: Maybe<Scalars['Float']['output']>;
  price: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOrder = {
  productId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
};

export type ProductType = {
  _id: Scalars['ID']['output'];
  author: User;
  category: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  oldPrice: Maybe<Scalars['Float']['output']>;
  price: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Products = {
  _id: Scalars['ID']['input'];
  author: OrderUser;
  category: Scalars['String']['input'];
  color: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  oldPrice: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type Query = {
  product: Product;
  productById: GetProductResponse;
  products: GetProductsResponse;
  productsSearch: GetProductsResponse;
  relatedProducts: Array<Product>;
  reviews: Array<Review>;
  reviewsCount: ReviewsCountResponse;
  reviewsUser: Array<ReviewsType>;
  user: User;
  users: Array<User>;
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductByIdArgs = {
  productId: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  getProductsInput: GetProductsInput;
};


export type QueryProductsSearchArgs = {
  getProductsSearchInput: GetProductsSearchInput;
};


export type QueryRelatedProductsArgs = {
  productId: Scalars['String']['input'];
};


export type QueryReviewsUserArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Review = {
  _id: Scalars['ID']['output'];
  comment: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  productId: Scalars['ID']['output'];
  rating: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type ReviewsCountResponse = {
  totalReviews: Scalars['Float']['output'];
};

export type ReviewsType = {
  _id: Scalars['ID']['output'];
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  productId: Scalars['ID']['output'];
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: User;
};

export type UpdateProductInput = {
  category: InputMaybe<Scalars['String']['input']>;
  color: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  oldPrice: InputMaybe<Scalars['Float']['input']>;
  price: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateProductResponse = {
  message: Scalars['String']['output'];
  product: Product;
};

export type UpdateUserRoleInput = {
  role: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UpdateUserRoleResponse = {
  message: Scalars['String']['output'];
  user: User;
};

export type User = {
  _id: Scalars['ID']['output'];
  bio: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  password: Maybe<Scalars['String']['output']>;
  profession: Maybe<Scalars['String']['output']>;
  profilePicture: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserId = {
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type CreateChekcoutSessionVariables = Exact<{
  input: CheckoutProductInput;
}>;


export type CreateChekcoutSession = { checkout: { id: string } };

export type DeleteProductVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteProduct = { deleteProduct: { message: string } };

export type GetProductsVariables = Exact<{
  input: GetProductsInput;
}>;


export type GetProducts = { products: { totalPages: number, totalProducts: number, products: Array<{ _id: string, name: string, category: string, description: string, price: number, oldPrice: number | null, image: string, color: string, rating: number, createdAt: any, updatedAt: any, author: { _id: string, email: string, role: string } }> } };

export type GetProductVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetProduct = { productById: { product: { _id: string, name: string, category: string, description: string, price: number, oldPrice: number | null, image: string, color: string, rating: number, createdAt: any, updatedAt: any, author: { _id: string, email: string, username: string, role: string } }, reviews: Array<{ _id: string, comment: string, rating: number, productId: string, createdAt: any, updatedAt: any, userId: { _id: string, email: string, username: string, role: string } }> } };

export type FetchRelatedProductVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FetchRelatedProduct = { relatedProducts: Array<{ _id: string, name: string, category: string, description: string, price: number, oldPrice: number | null, image: string, color: string, rating: number, author: string, createdAt: any | null, updatedAt: any | null }> };

export type SearchProductsVariables = Exact<{
  input: GetProductsSearchInput;
}>;


export type SearchProducts = { productsSearch: { totalPages: number, totalProducts: number, products: Array<{ _id: string, name: string, category: string, description: string, price: number, oldPrice: number | null, image: string, color: string, rating: number, createdAt: any, updatedAt: any, author: { _id: string, email: string, role: string } }> } };

export type UpdateProductVariables = Exact<{
  id: Scalars['String']['input'];
  input: UpdateProductInput;
}>;


export type UpdateProduct = { updateProduct: { message: string, product: { _id: string, name: string, category: string, description: string, price: number, oldPrice: number | null, image: string, color: string, rating: number, author: string, createdAt: any | null, updatedAt: any | null } } };

export type CreateReviewVariables = Exact<{
  input: CreateReviewInput;
}>;


export type CreateReview = { create: { message: string, reviews: Array<{ _id: string, comment: string, rating: number, userId: string, productId: string, createdAt: any | null, updatedAt: any | null }> } };

export type ReviewsByUserIdVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type ReviewsByUserId = { reviewsUser: Array<{ _id: string, comment: string, rating: number, productId: string, createdAt: any, updatedAt: any, userId: { _id: string, email: string, username: string, role: string } }> };

export type AddProductVariables = Exact<{
  input: CreateProductInput;
}>;


export type AddProduct = { createProduct: { _id: string, name: string, category: string, description: string, price: number, oldPrice: number | null, image: string, color: string, rating: number, author: string, createdAt: any | null, updatedAt: any | null } };

export type CreateUserVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUser = { createUser: { message: string } };

export type DeleteUserVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUser = { deleteUser: { message: string } };

export type EditProfileVariables = Exact<{
  input: EditProfileInput;
}>;


export type EditProfile = { editProfile: { message: string, user: { _id: string, email: string, username: string, role: string, profilePicture: string | null, bio: string | null, profession: string | null } } };

export type GetUserVariables = Exact<{ [key: string]: never; }>;


export type GetUser = { users: Array<{ _id: string, email: string, username: string, role: string }> };

export type LoginVariables = Exact<{
  input: LoginUserInput;
}>;


export type Login = { login: { message: string, token: string, user: { _id: string, email: string, username: string, role: string, profilePicture: string | null, bio: string | null, profession: string | null } } };

export type LogoutVariables = Exact<{ [key: string]: never; }>;


export type Logout = { logout: { message: string } };

export type UpdateUserRoleVariables = Exact<{
  input: UpdateUserRoleInput;
}>;


export type UpdateUserRole = { updateUserRole: { message: string } };
