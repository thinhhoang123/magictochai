export interface ICreateUserParams {
  clerkId: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  photo: string;
}

export interface IUpdateUserParams {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
}
