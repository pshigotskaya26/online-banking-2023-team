import { FC } from 'react';

interface InputCardProps {
  value: number,
  handleInputValue: (n: number) => void,
  canTransfer?: boolean
}

const InputCard: FC<InputCardProps> = ({ value, handleInputValue, canTransfer = false }) => {

  const nameInputClass = () => {
    if (value === 0) return 'input-default';
    if (value.toString().length === 16) return 'input-valid';
    return 'input-invalid';
  };


  return (
    <div
      className='w-[340px] h-[213px] m-auto bg-gray-100 rounded-xl relative shadow transition-transform transform hover:scale-105'
    >
      <div className='w-full px-8 absolute top-8'>
        <div className='pt-1'>

          <div className='flex justify-center'>
            <div className='mb-3 xl:w-96'>
              <input
                type='text'
                className={`${nameInputClass()} text-xl`}
                value={value === 0 ? '' : value}
                onChange={(e) => handleInputValue(+e.target.value)}
                placeholder={'XXXX XXXX XXXX XXXX'}
              />
            </div>
          </div>
          {
            value.toString().length === 16 && <div className={'flex items-center mt-16'}>
              <div className={`w-2 h-2 ${canTransfer ? 'bg-green-500' : 'bg-red-500'} rounded mr-2`}></div>
              <div className={'text-gray-400'}>
                {
                  canTransfer ? 'Card exist' : 'Card is not exist'
                }
              </div>

            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default InputCard;