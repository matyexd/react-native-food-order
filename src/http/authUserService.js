import $api from './index';

export const loginFetch = ({login, password}) => {
  return $api
    .post('/login', {login: login, password: password})
    .then(data => data);
};

export const checkAuthFetch = () => {
  return $api.get('/user');
};
