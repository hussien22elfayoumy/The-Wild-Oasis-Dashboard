import { supabase } from '../db/supabase';
import { TCreateCabin } from '../types/schema/create-cabin-schema';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    // console.error(error);
    throw new Error("Cabins couldn't be loaded");
  }
  return data;
}

//https://xaryswpcvvejetwiphrn.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

export async function createEditCabin(
  newCabin: TCreateCabin,
  cabinId?: number
) {
  const hasImagePath = newCabin.image?.startsWith?.(
    import.meta.env.VITE_SUPABASE_URL
  );

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from('cabins');

  if (!cabinId) {
    await query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    await query.update({ ...newCabin, image: imagePath }).eq('id', cabinId);
  }

  const { data, error } = await query.select();

  if (error) {
    throw new Error("Cabin couldn't be created");
  }

  // TODO: Upload Image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // TODO: Remove cabine if image didn't upload
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data[0].id);
    throw new Error(
      'Error uploading the Image and the cabin could not be created'
    );
  }

  return data;
}

export async function deleteCabine(id: number) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    // console.error(error);
    throw new Error("Cabin couldn't be deleted");
  }

  return data;
}
