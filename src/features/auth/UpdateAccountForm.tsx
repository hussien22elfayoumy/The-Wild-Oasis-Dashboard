import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../components/global/Button';
import FormRow from '../../components/global/FormRow';
import {
  TUpdateAccountForm,
  updateAccountFormSchema,
} from '../../types/schema/signup-schema';
import { useUpdateUser } from './useUpdateUser';
import { useUser } from './useUser';

export default function UpdateAccountForm() {
  const { user } = useUser();
  const { updateUser, isPending } = useUpdateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateAccountForm>({
    resolver: zodResolver(updateAccountFormSchema),
    defaultValues: {
      email: user?.email,
      fullName: user?.user_metadata.fullName,
      avatar: user?.user_metadata.avatar,
    },
  });

  function onSubmit(values: TUpdateAccountForm) {
    updateUser(values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-my-grey-0 w-full max-w-xl space-y-3 rounded-lg p-10"
    >
      <div className="border-my-brand-600 mx-auto size-20 overflow-hidden rounded-full border-2">
        <img
          src={user?.user_metadata?.avatar || 'default-user.jpg'}
          className="h-full w-full object-cover"
          alt={`Avatar for the user`}
        />
      </div>
      <FormRow error={errors.email?.message} labelName="Email" labelFor="email">
        <input
          disabled
          type="email"
          id="email"
          autoComplete="email"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow disabled:cursor-not-allowed disabled:opacity-40"
          {...register('email')}
        />
      </FormRow>

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

      <FormRow labelName="Avatar" labelFor="avatar">
        <input
          type="file"
          id="avatar"
          accept="image/*"
          className="border-my-grey-200 bg-my-grey-0 file:text-my-brand-50 file:bg-my-brand-600 hover:file:bg-my-brand-700 rounded-md border shadow file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:px-4 file:py-2 file:font-medium"
          {...register('avatar')}
        />
      </FormRow>

      <div className="flex flex-col pt-4">
        <Button disabled={isPending} variation="primary">
          Update account
        </Button>
      </div>
    </form>
  );
}
