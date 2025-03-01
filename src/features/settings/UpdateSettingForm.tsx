import { useForm } from 'react-hook-form';
import Button from '../../components/global/Button';
import FormRow from '../../components/global/FormRow';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TUpdateSettings,
  updateSettingsSechema,
} from '../../types/schema/update-settings-schema';

export default function UpdateSettingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateSettings>({
    resolver: zodResolver(updateSettingsSechema),
  });

  function onsubmit(values: TUpdateSettings) {
    console.log(values);
  }
  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="bg-my-grey-0 mx-auto w-full max-w-2xl space-y-3 rounded-lg px-6 py-8"
    >
      <FormRow
        error={errors.minBookingLength?.message}
        labelName="min-nights"
        labelFor="min-nights"
      >
        <input
          type="number"
          id="min-nights"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow"
          {...register('minBookingLength')}
        />
      </FormRow>

      <FormRow
        error={errors.maxBookingLength?.message}
        labelName="max-nights"
        labelFor="max-nights"
      >
        <input
          type="number"
          id="max-nights"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow"
          {...register('maxBookingLength')}
        />
      </FormRow>

      <FormRow
        error={errors.maxGuestsPerBooking?.message}
        labelName="max-guests"
        labelFor="max-guests"
      >
        <input
          type="number"
          id="max-guests"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow"
          {...register('maxGuestsPerBooking')}
        />
      </FormRow>

      <FormRow
        error={errors.breakfastPrice?.message}
        labelName="breakfast-price"
        labelFor="breakfast-price"
      >
        <input
          type="number"
          id="breakfast-price"
          className="border-my-grey-200 bg-my-grey-0 h-11 rounded-md border p-2 shadow"
          {...register('breakfastPrice')}
        />
      </FormRow>
      <div className="flex justify-end gap-3 pt-4">
        <Button variation="primary">Update Settings</Button>
      </div>
    </form>
  );
}
