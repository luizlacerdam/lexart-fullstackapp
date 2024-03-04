import authRequire from '../../../auth/authRequire';

export default async function appLoader() {
  await authRequire();
  return null;
}
