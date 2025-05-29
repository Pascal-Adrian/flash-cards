export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ startIcon, ...rest }) => {
  return (
    <div
      className={`p-2 flex items-center gap-2 rounded-sm border border-gray-950/10 dark:border-gray-50/10 ${rest.className}`}
    >
      <span className='text-gray-600 dark:text-gray-400'>{startIcon}</span>
      <input
        {...rest}
        className='w-full focus:outline-0 placeholder:text-gray-600 dark:placeholder:text-gray-400'
      />
    </div>
  );
};

export default Input;
