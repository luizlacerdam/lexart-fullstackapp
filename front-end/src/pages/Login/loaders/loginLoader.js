import { redirect } from 'react-router-dom';
import getUserToken from '../../../auth/getUserToken';
import { requestDataWithToken } from '../../../utils/requests';

export default async function loginLoader() {
  try {
    const response = await requestDataWithToken(
      '/login/validate',
      getUserToken(),
    );
    if (response.status === 'OK') {
      return redirect('/app');
    }
    return response;
  } catch (er) {
    console.log(er);
    return null;
  }
}
