export default interface ICreditPayment {
  id: number;
  dateOfContribution: number;
  paymentValue: number | null;
  fine: number;
  isPaid: boolean;
  status: string;
}
