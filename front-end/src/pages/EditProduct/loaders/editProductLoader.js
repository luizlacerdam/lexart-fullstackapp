import { getLocalStorage } from '../../../utils/localStorageHandling';
import { requestDataWithToken } from '../../../utils/requests';

export default async function editProductLoader({ params }) {
  const user = getLocalStorage('user');
  const { id } = params;
  const data = await requestDataWithToken(`/product/${id}`, user.token);
  if (data) {
    return data;
  }

  return null;
}
