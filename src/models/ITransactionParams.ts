export interface ICheckoutTransactionParams {
  plan: string;
  credits: number;
  amount: number;
  buyerId: string;
}

export interface ICreateTransactionParams {
  stripeId: string;
  amount: number;
  credits: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
}
