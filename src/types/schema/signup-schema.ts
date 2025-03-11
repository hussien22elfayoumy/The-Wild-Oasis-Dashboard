import z from 'zod';

export const signupFormSchema = z
  .object({
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
  })
  .refine((values) => values.password === values.passwordConfirm, {
    message: 'Password must be match',
    path: ['passwordConfirm'],
  });

export type TSignupForm = z.infer<typeof signupFormSchema>;

/* 
export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .min(5, 'Name must be at least 5 chars')
      .max(50, 'Name must be at most 50 chars'),
    email: z.string().min(1, 'Email is required').email().trim().toLowerCase(),
    phone: z
      .string()
      .min(1, 'Phone is required')
      .refine(
        (value) =>
          value.startsWith('010') ||
          value.startsWith('012') ||
          value.startsWith('015') ||
          value.startsWith('011'),
        {
          message: 'Phone number must start with 010, 012, 011, or 015',
        }
      )
      .refine((value) => value.length === 11, {
        message: 'Phone number must be exactly 11 digits long',
      })
      .refine((value) => /^\d+$/.test(value), {
        message: 'Phone number must contain only digits',
      }),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
      .trim(),
    rePassword: z.string(),
  })
  .refine((values) => values.password === values.rePassword, {
    message: 'Password must be match',
    path: ['rePassword'],
  });


*/
