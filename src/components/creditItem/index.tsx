import './index.css';
import React from 'react';
import ICredit from '../../types/interfaces/ICredit';

interface CreditItemProps {
  credit: ICredit;
}

const CreditItem: React.FC<CreditItemProps> = (props) => {
  return <div className="credit-item">123</div>;
};

export default CreditItem;
