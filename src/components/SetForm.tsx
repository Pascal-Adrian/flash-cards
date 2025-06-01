import { useForm } from 'react-hook-form';

const SetForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('title')} />
        <div />
        <textarea {...register('description')} />
      </div>
      <div></div>
    </form>
  );
};

export default SetForm;
