import z from 'zod';

const baseSignupFormSchema = z.object({
  fullName: z
    .string()
    .min(5, 'Name must be at least 5 chars')
    .max(50, 'Name must be at most 50 chars'),
  email: z.string().min(1, 'Email is required').email().toLowerCase().trim(),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[^a-zA-Z0-9]/,
      'Password must contain at least one special character'
    )
    .trim(),
  passwordConfirm: z.string(),
  avatar: z.any(),
});

export const signupFormSchema = baseSignupFormSchema.refine(
  (values) => values.password === values.passwordConfirm,
  {
    message: 'Password must match',
    path: ['passwordConfirm'],
  }
);

export const updateAccountFormSchema = baseSignupFormSchema.omit({
  password: true,
  passwordConfirm: true,
});

export type TSignupForm = z.infer<typeof signupFormSchema>;
export type TUpdateAccountForm = z.infer<typeof updateAccountFormSchema>;
