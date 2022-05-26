// import {
//   AUTH_CHECK,
//   AUTH_CHECK_FAIL,
//   AUTH_CHECK_SUCCESS,
// } from '../types/authTypes';
//
// export const authUserReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case AUTH_CHECK:
//       return {
//         ...state,
//         isLoadingSplash: true,
//       };
//
//     case AUTH_CHECK_SUCCESS:
//       console.log(action.payload);
//       return {
//         ...state,
//         user: {
//           id: action.payload.data.id,
//           email: action.payload.data.email,
//           name: action.payload.data.name,
//           floor: action.payload.data.floor,
//         },
//         isLoadingSplash: false,
//         isAuth: true,
//         errors: {login: [], password: []},
//       };
//     case AUTH_CHECK_FAIL:
//       return {
//         ...state,
//         user: {},
//         isAuth: false,
//         isLoadingSplash: false,
//         errors: {login: [], password: [], checkAuthError: [action.payload]},
//       };
//   }
// };
