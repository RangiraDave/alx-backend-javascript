import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    return Promise.resolve({
        photo: await uploadPhoto(),
        user: await createUser()
    });
  }
  catch (error) {
    return Promise.resolve({ photo: null, user: null });
  }
}
