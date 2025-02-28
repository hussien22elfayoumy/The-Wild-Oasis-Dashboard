import z from 'zod';
export const createCabinSchema = z
  .object({
    name: z.string().min(1, 'cabin name is Required'),
    maxCapacity: z.coerce
      .number()
      .positive('Max Capacity must be greater than 0'),
    regularPrice: z.coerce.number().positive('Price must be greater than 0'),
    discount: z.coerce
      .number()
      .refine((val) => val >= 0, 'discount must be greater or equal than 0')
      .optional(),
    description: z.string().min(1, 'Description is Required'),
    image: z.any(),
    // .refine((file) => !file, 'Cabin Image is required')
    // // .refine(
    // //   (file) =>
    // //     !file || file.length === 0 || file[0]?.type?.startsWith('image/'),
    // //   {
    // //     message: 'File must be an image',
    // //   }
    // // )
    // // .refine(
    // //   (file) =>
    // //     !file || file.length === 0 || file[0]?.size <= 5 * 1024 * 1024,
    // //   {
    // //     message: 'File size must be less than 5MB',
    // //   }
    // // )
    // .optional(),
  })
  .refine((values) => values.discount! < values.regularPrice, {
    message: 'Discount must be less than price',
    path: ['discount'],
  });

export type TCreateCabin = z.infer<typeof createCabinSchema>;
