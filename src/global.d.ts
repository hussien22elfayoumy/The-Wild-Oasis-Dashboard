import { Database } from './lib/database.types';

declare global {
  type TBookings = Database['public']['Tables']['bookings']['Row'];
  type TCabins = Database['public']['Tables']['cabins']['Row'];
  type TGuests = Database['public']['Tables']['guests']['Row'];
  type TSettings = Database['public']['Tables']['settings']['Row'];
}

export {};
