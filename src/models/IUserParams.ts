export interface ICreateUserParams {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}

export interface IUpdateUserParams {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
}
