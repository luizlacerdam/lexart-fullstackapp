import { getLocalStorage } from '../../../utils/localStorageHandling';
import { requestPatchWithToken } from '../../../utils/requests';

export default async function editProductAction({ request }) {
  try {
    const formData = await request.formData();
    const id = formData.get('id');
    const name = formData.get('name');
    const brand = formData.get('brand');
    const model = formData.get('model');
    const color = formData.get('color');
    let price = formData.get('price');

    price = parseFloat(price).toFixed(2);
    price = parseFloat(price);

    const user = getLocalStorage('user');
    const response = await requestPatchWithToken(`/product/${id}`, {
      name, brand, model, color, price }, user.token);
    return response;
  } catch (er) {
    console.log(er);
    return er;
  }
}
