export default interface ICreditPayment {
  id: number;
  dateOfContribution: number;
  paymentValue: number;
  fine: number;
  isPaid: boolean;
  status: string;
  statusOfButton: string;
}
