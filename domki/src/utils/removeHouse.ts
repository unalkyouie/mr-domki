import { URL } from '@env';

export const removeHouse = async (houseId: string) => {
  return await fetch(`${URL}/${houseId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
  });
};
