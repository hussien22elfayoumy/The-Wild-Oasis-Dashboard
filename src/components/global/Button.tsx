interface ButtonProps {
  children: React.ReactNode;
  variation?: 'primary' | 'secondary' | 'danger' | 'filter' | 'pagination';
  size?: 'small' | 'medium' | 'large';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  active?: boolean;
}

const Button = ({
  active,
  children,
  variation = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  const baseStyles = 'border-none rounded-md  cursor-pointer';
  const sizeStyles = {
    small: 'text-sm uppercase px-2 py-1 font-semibold',
    medium: 'text-base px-3 py-2 font-medium',
    large: 'text-lg px-6 py-4 font-medium',
  };
  const variationStyles = {
    primary: 'text-my-brand-50 shadow-sm bg-my-brand-600 hover:bg-my-brand-700',
    secondary:
      'text-my-grey-600 shadow-sm bg-my-grey-0 border border-my-grey-200 hover:bg-my-grey-50',
    danger: 'text-my-red-100 shadow-sm bg-my-red-700 hover:bg-my-red-800',
    filter: ` disabled:hover:text-my-grey-900 hover:bg-my-brand-600 hover:text-my-brand-50 ${
      active ? ' bg-my-brand-600 text-my-brand-50 ' : 'bg-my-grey-0'
    } disabled:hover:bg-gray-0  rounded-sm border-none px-2 py-1 text-sm font-medium transition-all duration-300`,
    pagination:
      'bg-my-gray-50 hover:bg-my-brand-600 hover:text-my-brand-50 flex items-center justify-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-300 disabled:hover:text-my-grey-600 disabled:hover:bg-transparent',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variationStyles[variation]} disabled:cursor-not-allowed disabled:opacity-80`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
