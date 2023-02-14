import IService from '../../../../types/interfaces/IService';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface PaymentListProps {}

export const PaymentForm: FC<PaymentListProps> = ({}) => {
  const { id } = useParams();

  return <div>There is no services for display {id}.</div>;
};
