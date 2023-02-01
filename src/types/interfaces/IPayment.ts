export default interface IPayment {
  id: number; //DB index
  userid: number;
  cardid: number;
  serviceid: number; //получатель платежа (оплата за услугу / юзер, которому был перевод)
  timestamp: number; //время платежа
  value: number; //сумма платежа
  checkid: number; //чек для пользователя
  status: string; // payment result
}
