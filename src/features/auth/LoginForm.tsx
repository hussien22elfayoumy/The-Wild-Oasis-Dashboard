import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../components/global/Button';
import FormRow from '../../components/global/FormRow';
import { loginFormSchema, TLoginForm } from '../../types/schema/login-scheme';
import { useLogin } from './useLogin';

export default function LoginForm() {
  const { loginMutation, isLogining } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: 'rebos13521@kaiav.com',
      password: '@MOsalah.123',
    },
  });

  function onSubmit(values: TLoginForm) {
    loginMutation(values);
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
          autoComplete="email"
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
          autoComplete="current-password"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow"
          {...register('password')}
        />
      </FormRow>

      <div className="flex flex-col pt-4">
        <Button disabled={isLogining} variation="primary">
          {isLogining ? 'Logining...' : 'Log in'}
        </Button>
      </div>
    </form>
  );
}
