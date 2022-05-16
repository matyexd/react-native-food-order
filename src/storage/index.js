import EncryptedStorage from 'react-native-encrypted-storage';

export async function storeUserSession(key, value) {
  try {
    await EncryptedStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveUserSession(key, config) {
  try {
    const token = await EncryptedStorage.getItem(key);

    if (token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function removeUserSession(key) {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}

export async function clearStorage() {
  try {
    await EncryptedStorage.clear();
  } catch (error) {
    console.log(error);
  }
}
