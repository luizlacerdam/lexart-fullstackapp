import { redirect } from 'react-router-dom';
import { requestLogin } from '../../../utils/requests';
import { setItem } from '../../../utils/localStorageHandling';

export default async function SignUpAction({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    const response = await requestLogin('/user/create', { email, password });
    setItem('user', { token: response.token, ...response.user });
    return redirect('/app');
  } catch (er) {
    console.log(er);
    return er;
  }
}
