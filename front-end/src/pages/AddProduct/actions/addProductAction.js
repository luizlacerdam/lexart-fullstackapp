import { getLocalStorage } from '../../../utils/localStorageHandling';
import { requestPostWithToken } from '../../../utils/requests';

export default async function addProductAction({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const brand = formData.get('brand');
    const model = formData.get('model');
    const color = formData.get('color');
    const price = formData.get('price');

    const user = getLocalStorage('user');

    const response = await requestPostWithToken('/product/create', {
      name, brand, model, color, price }, user.token);
    return response;
  } catch (er) {
    console.log(er);
    return er;
  }
}
