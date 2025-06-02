import { FiChevronDown } from 'react-icons/fi';

export type SelectValue = string | number | undefined;

export type SelectOption = {
  label: string;
  value: SelectValue;
};

export interface SelectProps {
  options: SelectOption[];
  value?: SelectValue;
  onChange: (value: SelectValue) => void;
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  return (
    <div
      className={`relative rounded-sm border border-gray-950/10 dark:border-gray-50/10 ${className}`}
    >
      <select
        className={`cursor-pointer relative z-10 w-full h-full pl-3 pr-8 py-2 rounded-sm appearance-none focus:outline-0 ${value !== undefined ? 'text-gray-950 dark:text-gray-50' : 'text-gray-400 dark:text-gray-500'} `}
        value={value || ''}
        onChange={(e) => onChange(e.target.value as SelectValue)}
      >
        <option value={''}>{placeholder || ''}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500'>
        <FiChevronDown />
      </span>
    </div>
  );
};

export default Select;
