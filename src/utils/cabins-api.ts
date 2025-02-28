import { FieldValues } from 'react-hook-form';
import { supabase } from '../db/supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    // console.error(error);
    throw new Error("Cabins couldn't be loaded");
  }
  return data;
}

//https://xaryswpcvvejetwiphrn.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

/* export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(
    import.meta.env.VITE_SUPABASE_URL
  );

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imageUrl = hasImagePath
    ? newCabin.image
    : `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/cabin-images/${imageName}`;

  // TODO: Create/Updata Capin

  let query = supabase.from('cabins');

  if (!id) {
    await query.insert([{ ...newCabin, image: imageUrl }]);
  } else {
    await query.update({ ...newCabin, image: imageUrl }).eq('id', id);
  }

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("Can't Create cabin right now try again later");
  }

  // TODO: Upload Image

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // TODO: Remove cabine if image didn't upload
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Error uploading the Image and the cabin could not be created'
    );
  }

  return data;
} */

export async function createCabin(newCabin: FieldValues) {
  const { data, error } = await supabase.from('cabins').insert([newCabin]);

  if (error) {
    // console.error(error);
    throw new Error("Cabin couldn't be created");
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
