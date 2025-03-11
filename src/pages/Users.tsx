import SignupForm from '../features/auth/SignupForm';

function Users() {
  return (
    <>
      <h1 className="text-3xl leading-relaxed font-semibold">
        Create a new user
      </h1>

      <div className="bg-my-grey-50 flex flex-col items-center justify-center gap-8">
        <SignupForm />
      </div>
    </>
  );
}
export default Users;
