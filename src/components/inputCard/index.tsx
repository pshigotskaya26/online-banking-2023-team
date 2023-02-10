import { FC } from 'react';

interface InputCardProps {
  value: number,
  handleInputValue: (n: number) => void
}

const InputCard: FC<InputCardProps> = ({ value, handleInputValue }) => {
  return (
    <div
      className='w-96 h-56 m-auto bg-gray-100 rounded-xl relative shadow transition-transform transform hover:scale-105'>
      <div className='w-full px-8 absolute top-8'>
        <div className='pt-1'>

          <div className='flex justify-center'>
            <div className='mb-3 xl:w-96'>
              <input
                type='text'
                placeholder={'XXXX XXXX XXXX XXXX'}
                className={'w-full p-2 text-xl'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCard;