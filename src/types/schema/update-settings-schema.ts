import { z } from 'zod';

export const updateSettingsSechema = z
  .object({
    minBookingLength: z.coerce
      .number()
      .positive('Min nights must be greater than 0'),
    maxBookingLength: z.coerce
      .number()
      .positive('Max nights must be greater than 0'),
    maxGuestsPerBooking: z.coerce
      .number()
      .positive('max guests must be greater than 0'),
    breakfastPrice: z.coerce
      .number()
      .positive('Breakfast price must be greater than 0'),
  })
  .refine((values) => values.maxBookingLength > values.minBookingLength, {
    message: 'Max nights must be greater than Min nights',
    path: ['maxBookingLength'],
  });

export type TUpdateSettings = z.infer<typeof updateSettingsSechema>;
