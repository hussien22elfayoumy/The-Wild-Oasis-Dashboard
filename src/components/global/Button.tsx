interface ButtonProps {
  children: React.ReactNode;
  variation?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

const Button = ({
  children,
  variation = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  const baseStyles = 'border-none rounded-md shadow-sm cursor-pointer';
  const sizeStyles = {
    small: 'text-sm uppercase px-2 py-1 font-semibold',
    medium: 'text-base px-4 py-3 font-medium',
    large: 'text-lg px-6 py-4 font-medium',
  };
  const variationStyles = {
    primary: 'text-my-brand-50 bg-my-brand-600 hover:bg-my-brand-700',
    secondary:
      'text-my-grey-600 bg-my-grey-0 border border-my-grey-200 hover:bg-my-grey-50',
    danger: 'text-my-red-100 bg-my-red-700 hover:bg-my-red-800',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variationStyles[variation]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
