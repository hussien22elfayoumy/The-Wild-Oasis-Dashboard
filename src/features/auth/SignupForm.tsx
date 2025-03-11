import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../components/global/Button';
import FormRow from '../../components/global/FormRow';
import {
  signupFormSchema,
  TSignupForm,
} from '../../types/schema/signup-schema';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupForm>({
    resolver: zodResolver(signupFormSchema),
  });

  function onSubmit(values: TSignupForm) {
    console.log(values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-my-grey-0 w-full max-w-xl space-y-3 rounded-lg p-10"
    >
      <FormRow
        error={errors.fullName?.message}
        labelName="Full name"
        labelFor="fullName"
      >
        <input
          type="text"
          id="fullName"
          autoComplete="name"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow"
          {...register('fullName')}
        />
      </FormRow>
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

      <FormRow
        error={errors.passwordConfirm?.message}
        labelName="Confirm password"
        labelFor="passwordConfirm"
      >
        <input
          type="password"
          id="passwordConfirm"
          autoComplete="current-password"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow"
          {...register('passwordConfirm')}
        />
      </FormRow>

      <div className="flex flex-col gap-2 pt-4">
        <Button disabled={false} variation="primary">
          {false ? 'Creating user...' : 'Create user'}
        </Button>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
      </div>
    </form>
  );
}
