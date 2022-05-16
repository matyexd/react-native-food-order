import EncryptedStorage from 'react-native-encrypted-storage';

export async function storeUserSession(key, value) {
  try {
    await EncryptedStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveUserSession(key) {
  try {
    const session = await EncryptedStorage.getItem(key);

    if (session !== undefined) {
      return session;
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
