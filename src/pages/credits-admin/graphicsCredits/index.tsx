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
      <GraphicLineItem title={'Платежи по дням'} data={paymentsByDays} />
      <GraphicLineItem title={'Взято кредитов по дням'} data={creditsByDays} />
    </div>
  );
};

export default GraphicsCredits;
