import { useTheme } from '../../contexts/ThemeContext';

function Logo() {
  const { darkMode } = useTheme();
  return (
    <div className="self-center">
      <img
        src={darkMode ? '/logo-dark.png' : '/logo-light.png'}
        alt="Logo"
        className="h-24 w-auto"
      />
    </div>
  );
}
export default Logo;
