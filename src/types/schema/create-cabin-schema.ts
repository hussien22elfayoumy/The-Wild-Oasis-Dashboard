import z from 'zod';
export const createCabinSchema = z
  .object({
    name: z.string().min(1, 'cabin name is Required'),
    maxCapacity: z.coerce
      .number()
      .positive('Max Capacity must be greater than 0'),
    regularPrice: z.coerce.number().positive('Price must be greater than 0'),
    discount: z.coerce.number().positive('Discount must be greater than 0'),
    description: z.string().min(1, 'Description is Required'),
  })
  .refine((values) => values.discount < values.regularPrice, {
    message: 'Discount must be less than price',
    path: ['discount'],
  });

export type TCreateCabin = z.infer<typeof createCabinSchema>;
