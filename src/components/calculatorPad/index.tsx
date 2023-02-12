import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Digit, Operator } from '../calculator';
import CalculatorButton from '../calculatorButton';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface CalculatorPadProps {
  onDigitButtonClick: (digit: Digit) => void
  onPointButtonClick: () => void
  onOperatorButtonClick: (operator: Operator) => void
  onChangeSignButtonClick: () => void
  onEqualButtonClick: () => void
  onClearEntryButtonClick: () => void,
  onSaveValue: () => void
}

const CalculatorPad: FC<CalculatorPadProps> = ({
                                                 onDigitButtonClick,
                                                 onOperatorButtonClick,
                                                 onEqualButtonClick,
                                                 onPointButtonClick,
                                                 onClearEntryButtonClick,
                                                 onChangeSignButtonClick,
                                                 onSaveValue,

                                               }) => {
  return <div>
    <div className='flex w-full'>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'C'} handlerButton={onClearEntryButtonClick}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'+/-'} handlerButton={onChangeSignButtonClick}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        {/*<CalculatorButton children={'%'} handlerButton={() => onDigitButtonClick(2)}></CalculatorButton>*/}
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'÷'} handlerButton={() => onOperatorButtonClick('÷')}></CalculatorButton>
      </div>
    </div>
    <div className='flex w-full'>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'7'} handlerButton={() => onDigitButtonClick(7)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'8'} handlerButton={() => onDigitButtonClick(8)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'9'} handlerButton={() => onDigitButtonClick(9)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'x'} handlerButton={() => onOperatorButtonClick('×')}></CalculatorButton>
      </div>
    </div>
    <div className='flex w-full'>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'4'} handlerButton={() => onDigitButtonClick(4)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'5'} handlerButton={() => onDigitButtonClick(5)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'6'} handlerButton={() => onDigitButtonClick(6)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'-'} handlerButton={() => onOperatorButtonClick('-')}></CalculatorButton>
      </div>
    </div>
    <div className='flex w-full'>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'1'} handlerButton={() => onDigitButtonClick(1)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'2'} handlerButton={() => onDigitButtonClick(2)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'3'} handlerButton={() => onDigitButtonClick(3)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'+'} handlerButton={() => onOperatorButtonClick('+')}></CalculatorButton>
      </div>
    </div>

    <div className={'flex w-full'}>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'0'} handlerButton={() => onDigitButtonClick(0)}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'.'} handlerButton={onPointButtonClick}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={'='} handlerButton={onEqualButtonClick}></CalculatorButton>
      </div>
      <div className='w-1/4 border-r border-b border-indigo-400'>
        <CalculatorButton children={<FontAwesomeIcon icon={faCheck} />}
                          handlerButton={() => {
                            onEqualButtonClick();
                            onSaveValue();
                          }
                          }></CalculatorButton>
      </div>
    </div>

  </div>;
};

export default CalculatorPad;