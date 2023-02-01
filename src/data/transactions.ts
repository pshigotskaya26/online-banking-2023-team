import { ITransaction } from "../types/interfaces/ITransaction";
import TransactionsTypesEnum from "../types/enums/TransactionsTypesEnum";
import TransactionStatusEnum from "../types/enums/TransactionStatusEnum";

const transactions: ITransaction[] = [
{
  id: 1,
  userid: 1,
  cardid: 1,
  timestamp: 1675273306576, //2023-02-01
  value: 10,
  entityid: 1,
  entitytype: TransactionsTypesEnum.PAYMENT,
  status: TransactionStatusEnum.SUCCESS,
  targetid: 100
  },
  {
    id: 2,
    userid: 1,
    cardid: 1,
    timestamp: 1615273306576, //2023-02-01
    value: 20,
    entityid: 1,
    entitytype: TransactionsTypesEnum.TRANSFER,
    status: TransactionStatusEnum.DECLINED,
    targetid: 3
  }


];

export default transactions;
