import Logo from '../components/global/Logo';
import LoginForm from '../features/auth/LoginForm';

function Login() {
  return (
    <main className="bg-my-grey-50 flex min-h-screen flex-col items-center justify-center gap-8">
      <Logo />
      <h2 className="text-2xl leading-relaxed font-semibold">
        Login to your account
      </h2>
      <LoginForm />
    </main>
  );
}
export default Login;
