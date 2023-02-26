import ClientLayout from '../../layouts/client';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';

import LatestCredits from './latestCredits';
import GraphicsCredits from './graphicsCredits';

const CreditsAdmin = () => {
  const { fetchCreditsAll } = useActions();
  const { credits } = useAppSelector((state) => state.creditsAdmin);
  useEffect(() => {
    fetchCreditsAll();
  }, []);

  return (
    <ClientLayout>
      <>
        <LatestCredits credits={credits} />
        {credits.length > 0 && <GraphicsCredits />}
      </>
    </ClientLayout>
  );
};

export default CreditsAdmin;
