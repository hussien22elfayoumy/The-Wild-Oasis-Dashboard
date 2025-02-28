interface ButtonProps {
  children: React.ReactNode;
  variation?: string;
  size?: string;
}

const Button = ({
  children,
  variation = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  const baseStyles = 'border-none rounded-sm shadow-sm cursor-pointer';
  const sizeStyles = {
    small: 'text-sm uppercase px-2 py-1 font-semibold',
    medium: 'text-base px-4 py-3 font-medium',
    large: 'text-lg px-6 py-4 font-medium',
  };
  const variationStyles = {
    primary: 'text-brand-50 bg-brand-600 hover:bg-brand-700',
    secondary:
      'text-grey-600 bg-grey-0 border border-grey-200 hover:bg-grey-50',
    danger: 'text-red-100 bg-red-700 hover:bg-red-800',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles['small']} ${variationStyles['primary']}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
