import PageTitle from '../../components/pageTitle';
import ClientLayout from '../../layouts/client';
import React, { useEffect } from 'react';

import { createNewTransfer, makeATransferByNumberCard } from '../../store/actions/transfers';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import FormTransfer from '../../components/formTransfer';
import { ITransferData } from '../../types/interfaces/ITransaction';
import FormTransferSkeleton from '../../components/formTransferSkeleton';
import FormTransferResult from '../../components/formTransferResult';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TransferStatus } from '../../types/enums/TransferStatus';

const TransfersPage = () => {
  const { cards, transferStatus, errorTransfer } = useAppSelector(state => state.transfers);
  const { user } = useAppSelector(state => state.authuser);
  const { makeATransferByNumberCard, createNewTransfer } = useActions();

  useEffect(() => {
    createNewTransfer()
  }, [])

  const handleTransfer = (transferData: ITransferData) => {
    makeATransferByNumberCard(transferData);
  };
  return (
    <ClientLayout>
      <PageTitle
        title={'Transfers from card to card'}
        description={
          'Online service for money transfers from card to card of any bank'
        }
      />

      <div className='bg-white py-6 sm:py-8 lg:py-18'>
        {
          transferStatus === TransferStatus.CREATE &&
          <FormTransfer cards={cards} idUser={user?.id} handleTransfer={handleTransfer} />
        }
        {
          transferStatus === TransferStatus.LOADING &&
          <FormTransferSkeleton />
        }
        {
          transferStatus === TransferStatus.RESULT_SUCCESS &&
          <FormTransferResult icon={faCheck} text={'Перевод выполнен успешно'} handlerResult={createNewTransfer} />
        }
        {
          transferStatus === TransferStatus.RESULT_ERROR &&
          <FormTransferResult icon={faXmark} text={'Перевод не выполнен'} handlerResult={createNewTransfer}
                              description={errorTransfer} />
        }
      </div>
    </ClientLayout>
  );
};

export default TransfersPage;