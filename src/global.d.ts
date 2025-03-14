import { Database as DB } from './lib/database.types';

declare global {
  type Database = DB;
  type TBookings = DB['public']['Tables']['bookings']['Row'];
  type TCabins = DB['public']['Tables']['cabins']['Row'];
  type TGuests = DB['public']['Tables']['guests']['Row'];
  type TSettings = DB['public']['Tables']['settings']['Row'];

  type TBookingWithRelations = TBookings & {
    cabins: TCabins;
    guests: TGuests;
  };

  type TRecentStyes = TBookings & {
    guests: TGuests;
  };
}

export {};
