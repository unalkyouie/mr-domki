import { URL } from '@env';

import { House } from '../consts';

export const createHouse = async (house: House) => {
  return await fetch(`${URL}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(house),
  });
};
