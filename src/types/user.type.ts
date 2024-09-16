export type User = {
  _id: string
  email: string
  username: string
  password?: string
  role: string
  profilePicture?: string;
  bio?: string;
  profession?: string;
}