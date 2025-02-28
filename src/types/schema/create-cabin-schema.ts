import z from 'zod';
export const createCabinSchema = z
  .object({
    name: z.string().min(1, 'Description is Required'),
    maxCapacity: z.coerce.number().positive(),
    regularPrice: z.coerce.number().positive(),
    discount: z.coerce.number().positive(),
    description: z.string().min(1, 'Description is Required'),
  })
  .refine((values) => values.discount < values.regularPrice, {
    message: 'Discount must be less than price',
    path: ['discount'],
  });

export type TCreateCabin = z.infer<typeof createCabinSchema>;
