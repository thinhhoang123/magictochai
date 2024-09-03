export interface ICreateUserParams {
  clerkId: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  photo: string;
}

export interface IUpdateUserParams {
  firstName: string | null;
  lastName: string | null;
  username: string;
  photo: string;
}
