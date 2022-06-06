import $api from './index';
import {retrieveUserSession} from '../storage';

export async function getTokenFromServer() {
  return $api.get('/get-tokens').then(response => response.data);
}

export async function attachTokenOnServer(newToken) {
  return $api
    .post('/create-token', {token: newToken})
    .then(response => response.data);
}

export async function deleteTokenFromServer(tokenId) {
  return $api.delete('/delete-token/' + tokenId);
}
