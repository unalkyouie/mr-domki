import { URL } from '@env';

export const getHouse = async (houseId: string) => {
  const response = await fetch(`${URL}/${houseId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await response.json();
  return res;
};
