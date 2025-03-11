import { zodResolver } from '@hookform/resolvers/zod';
import FormRow from '../../components/global/FormRow';
import { useForm } from 'react-hook-form';
import { loginFormSchema, TLoginForm } from '../../types/schema/login-scheme';
import Button from '../../components/global/Button';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(values: TLoginForm) {
    console.log(values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-my-grey-0 w-full max-w-xl space-y-3 rounded-lg p-10"
    >
      <FormRow error={errors.email?.message} labelName="Email" labelFor="email">
        <input
          type="email"
          id="email"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow"
          {...register('email')}
        />
      </FormRow>

      <FormRow
        error={errors.password?.message}
        labelName="Password"
        labelFor="password"
      >
        <input
          type="password"
          id="password"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow"
          {...register('password')}
        />
      </FormRow>

      <div className="flex flex-col pt-4">
        <Button variation="primary">Login</Button>
      </div>
    </form>
  );
}
