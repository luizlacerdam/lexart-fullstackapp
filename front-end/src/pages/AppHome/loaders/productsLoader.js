import { getLocalStorage } from '../../../utils/localStorageHandling';
import { requestDataWithToken } from '../../../utils/requests';

export default async function productLoader() {
  const user = getLocalStorage('user');
  const data = await requestDataWithToken('/product', user.token);

  if (data) {
    return data;
  }

  return null;
}
