import { FC, useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import CalculatorDisplay from '../calculatorDisplay';
import CalculatorPad from '../calculatorPad';

interface CalculatorProps {
  value: number,
  setValue: (n: number) => void,
  closeCalculator: () => void
}

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type Operator = '+' | '-' | '×' | '÷'

const Calculator: FC<CalculatorProps> = ({ value = 0, setValue, closeCalculator }) => {
  const ref = useRef(null)
  const [memory] = useState<number>(0);
  const [result, setResult] = useState<number>(value);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
  const [pendingOperator, setPendingOperator] = useState<Operator>();
  const [display, setDisplay] = useState<string>(String(value));

  const calculate = (rightOperand: number, pendingOperator: Operator): boolean => {
    let newResult = result;

    switch (pendingOperator) {
      case '+':
        newResult += rightOperand;
        break;
      case '-':
        newResult -= rightOperand;
        break;
      case '×':
        newResult *= rightOperand;
        break;
      case '÷':
        if (rightOperand === 0) {
          return false;
        }

        newResult /= rightOperand;
    }

    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 12));

    return true;
  };

  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = display;

    if ((display === '0' && digit === 0) || display.length > 12) {
      return;
    }

    if (waitingForOperand) {
      newDisplay = '';
      setWaitingForOperand(false);
    }

    if (display !== '0') {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;

    if (waitingForOperand) {
      newDisplay = '0';
    }

    if (newDisplay.indexOf('.') === -1) {
      newDisplay = newDisplay + '.';
    }

    setDisplay(newDisplay);
    setWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator: Operator) => {
    const operand = Number(display);

    if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay('-' + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }

      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  const onClearEntryButtonClick = () => {
    setDisplay('0');
    setWaitingForOperand(true);
  };

  const onSaveValue = () => {
    setValue(Number(display));
  };

  useOnClickOutside(ref, closeCalculator)

  return <div
    className='w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden' ref={ref}>
    <CalculatorDisplay value={display} hasMemory={memory !== 0}
                       expression={typeof pendingOperator !== 'undefined'
                         ? `${result}${pendingOperator}${waitingForOperand ? '' : display}` : ''} />
    <div className='w-full bg-indigo-600'>
      <CalculatorPad
        onDigitButtonClick={onDigitButtonClick}
        onClearEntryButtonClick={onClearEntryButtonClick}
        onChangeSignButtonClick={onChangeSignButtonClick}
        onEqualButtonClick={onEqualButtonClick}
        onOperatorButtonClick={onOperatorButtonClick}
        onPointButtonClick={onPointButtonClick}
        onSaveValue={onSaveValue}
      />
    </div>
  </div>;
};

export default Calculator;