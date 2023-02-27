import React, { FC, useEffect } from 'react';

import GraphicLineItem from '../graphicItem';
import { useActions } from '../../../hooks/useActions';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface GraphicsCreditsProps {}

const GraphicsCredits: FC<GraphicsCreditsProps> = () => {
  const { getPaymentsByDays, getCreditsByDays } = useActions();
  const { paymentsByDays, creditsByDays } = useAppSelector(
    (state) => state.creditsAdmin,
  );

  useEffect(() => {
    getPaymentsByDays();
    getCreditsByDays();
  }, []);

  return (
    <div className={'flex flex-wrap justify-evenly mt-2'}>
      <GraphicLineItem title={'Payments by day'} data={paymentsByDays} />
      <GraphicLineItem title={'Loans taken by day'} data={creditsByDays} />
    </div>
  );
};

export default GraphicsCredits;
