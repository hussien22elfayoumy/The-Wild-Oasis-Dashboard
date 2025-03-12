import UpdateAccountForm from '../features/auth/UpdateAccountForm';

function Account() {
  return (
    <>
      <h1 className="text-3xl leading-relaxed font-semibold">
        Update your account
      </h1>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl leading-relaxed font-medium">
          Update user data
        </h3>
        <UpdateAccountForm />
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl leading-relaxed font-medium">
          Update password
        </h3>
        <p>Update user password form</p>
      </div>
    </>
  );
}

export default Account;
