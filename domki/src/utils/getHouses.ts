import { URL } from '@env';

export const getHouses = async () => {
  const response = await fetch(`${URL}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await response.json();
  return res.houses;
};
