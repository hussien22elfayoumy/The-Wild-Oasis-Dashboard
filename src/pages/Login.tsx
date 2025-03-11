import Logo from '../components/global/Logo';
import LoginForm from '../features/auth/LoginForm';

function Login() {
  return (
    <main className="bg-my-grey-50 flex min-h-screen flex-col items-center justify-center gap-8">
      <Logo />
      <h3 className="text-lg leading-relaxed font-semibold">
        Login to your account
      </h3>
      <LoginForm />
    </main>
  );
}
export default Login;
