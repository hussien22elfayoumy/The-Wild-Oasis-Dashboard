import z from 'zod';

export const loginFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email().toLowerCase().trim(),
  password: z.string().min(1, 'Password is required'),
});

export type TLoginForm = z.infer<typeof loginFormSchema>;
