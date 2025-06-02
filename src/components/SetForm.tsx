import { Controller, useFieldArray, useForm } from 'react-hook-form';
import type { Category, Set } from '../types/sets';
import { AiOutlineDelete } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import categories from '../utils/categories';
import { FiChevronDown } from 'react-icons/fi';
import { levelsMap } from '../utils/maps';

export interface SetFormProps {
  set?: Set;
  onSubmit: (set: Set) => void;
}

const defaultSet: Set = {
  title: '',
  description: '',
  last_opened: null,
  level: 1,
  category: undefined,
  tags: [],
  cards: [
    {
      question: '',
      answer: '',
      memorized: false,
    },
  ],
};

const SetForm: React.FC<SetFormProps> = ({ set, onSubmit }) => {
  const [_categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categoriesData = categories.getAll();
    setCategories(categoriesData);
  }, []);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Set>({
    defaultValues: set || defaultSet,
    mode: 'onChange',
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'cards',
    rules: {
      required: 'At least one card is required',
      minLength: {
        value: 1,
        message: 'At least one card is required',
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mt-4'>
        <input
          className={`w-full text-4xl font-bold px-4 py-2 border border-gray-950/10 dark:border-gray-50/10 rounded-md ${
            errors.title?.message
              ? 'border-2 border-red-500 dark:border-red-500'
              : ''
          }`}
          {...register('title', {
            required: 'Title is required',
            maxLength: {
              value: 100,
              message: 'Title cannot exceed 100 characters',
            },
          })}
          placeholder='Title *'
        />
        <p className='text-red-500 text-sm'>{errors.title?.message}</p>
        <textarea
          rows={3}
          className={`w-full mt-3 px-4 py-2 border border-gray-950/10 dark:border-gray-50/10 rounded-md ${
            errors.description?.message
              ? 'border-2 border-red-500 dark:border-red-500'
              : ''
          }`}
          {...register('description', {
            required: 'Description is required',
            maxLength: {
              value: 255,
              message: 'Description cannot exceed 255 characters',
            },
          })}
          placeholder='Description *'
        />
        <p className='text-red-500 text-sm'>{errors.description?.message}</p>
      </div>
      <div className='flex items-start gap-4 mt-4'>
        <Controller
          name='category'
          control={control}
          rules={{ required: 'Category is required' }}
          render={({ field }) => (
            <div className='w-full'>
              <div className='relative w-full'>
                <select
                  className={`appearance-none px-4 py-2 w-full border border-gray-950/10 dark:border-gray-50/10 rounded-md ${
                    errors.category?.message
                      ? 'border-2 border-red-500 dark:border-red-500'
                      : ''
                  }`}
                  value={field.value?.id || ''}
                  onChange={(e) => {
                    const selectedCategory = _categories.find(
                      (cat) => cat.id === Number(e.target.value),
                    );
                    field.onChange(selectedCategory);
                  }}
                >
                  <option value='' disabled>
                    Select Category *
                  </option>
                  {_categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500'>
                  <FiChevronDown />
                </div>
              </div>
              <p className='text-red-500 text-sm'>{errors.category?.message}</p>
            </div>
          )}
        />
        <div className='relative w-full'>
          <select
            {...register('level')}
            className='appearance-none px-4 py-2 w-full border border-gray-950/10 dark:border-gray-50/10 rounded-md'
          >
            {Object.entries(levelsMap).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
          <div className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500'>
            <FiChevronDown />
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {fields.map((field, index) => (
          <div
            className='p-4 border border-gray-950/10 dark:border-gray-50/10 rounded-lg'
            key={field.id}
          >
            <div className='flex items-center gap-2'>
              <input
                className={`text-lg font-medium w-full p-2 border border-gray-950/10 dark:border-gray-50/10 rounded-md ${
                  errors.cards?.[index]?.question?.message
                    ? 'border-2 border-red-500 dark:border-red-500'
                    : ''
                }`}
                placeholder='Question *'
                {...register(`cards.${index}.question`, {
                  required: 'Each card must have a question',
                  maxLength: {
                    value: 200,
                    message: 'Question cannot exceed 200 characters',
                  },
                })}
              />
              <button
                type='button'
                className='cursor-pointer p-[13px] hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg'
                onClick={() => remove(index)}
              >
                <div className='w-5 h-5'>
                  <AiOutlineDelete style={{ width: '100%', height: '100%' }} />
                </div>
              </button>
            </div>
            <p className='text-red-500 text-xs'>
              {errors.cards?.[index]?.question?.message}
            </p>
            <textarea
              rows={3}
              className={`w-full mt-2 p-2 border border-gray-950/10 dark:border-gray-50/10 rounded-md ${
                errors.cards?.[index]?.answer?.message
                  ? 'border-2 border-red-500 dark:border-red-500'
                  : ''
              }`}
              placeholder='Answer *'
              {...register(`cards.${index}.answer`, {
                required: 'Each card must have an answer',
                maxLength: {
                  value: 255,
                  message: 'Answer cannot exceed 255 characters',
                },
              })}
            />
            <p className='text-red-500 text-xs'>
              {errors.cards?.[index]?.answer?.message}
            </p>
          </div>
        ))}
        <div className='flex items-center justify-end gap-4 mt-4'>
          <button
            className='cursor-pointer px-6 py-4 w-fit font-medium border border-gray-950 dark:border-gray-50 rounded-lg'
            type='button'
            onClick={() =>
              append({
                answer: '',
                question: '',
                memorized: false,
              })
            }
          >
            Add Card
          </button>
          <button className='cursor-pointer px-6 py-4 w-fit font-medium bg-gray-950 text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200 rounded-lg'>
            Save Set
          </button>
        </div>
      </div>
    </form>
  );
};

export default SetForm;
