// import axios from "axios";
export const addCustomer = (body) => {
  return {
    type: 'ADD_CUSTOMER',
    payload: body
  }
}

// export const saveUser = (body) => {
//   return {
//     type: 'SAVE_USER',
//     payload: body
//   }
// }

// export const getUser = (token) => {
//   return {
//     type: 'GET_USER',
//     payload: axios.get('http://127.0.0.1:8888/api/v1/user',{
//      headers: {
//        Authorization: token
//      }
//     })
//   }
// }

// export const getMobi = (item) => {
//   return {
//     type: 'GET_MOBI',
//     payload: axios.get(`http://localhost:8888/api/v1/vehicle/${item}`)
//   }
// }

// export const getModel = (date) => {
//   return {
//     type: 'GET_MODEL',
//     payload: axios.get(`http://localhost:8888/api/v1/model/${date}`)
//   }
// }

// // export const getDetail = (id) => {
// //   return {
// //     type: 'GET_DETAIL',
// //     payload: axios.get(`http://192.168.1.113:3333/api/v1/pokemon/${id}`)
// //   }
// // }

// // export const getDelete = (id, token) => {
// //   return {
// //     type: 'GET_DELETE',
// //     payload: axios.delete(`http://192.168.1.113:3333/api/v1/pokemon/${id}`,{
// //      headers: {
// //        Authorization: 'Bearer ' + token
// //      }
// //     })
// //   }
// // }

// // export const addPokemon = (body,token) => {
// //   return {
// //     type: 'ADD_POKEMON',
// //     payload: axios.post(`http://192.168.1.113:3333/api/v1/pokemon/`,body,{
// //      headers: {
// //        Authorization: 'Bearer ' + token
// //      }
// //     })
// //   }
// // }

// // export const addLogin = (body) => {
// //   return {
// //     type: 'ADD_POKEMON',
// //     payload: axios.post(`http://192.168.1.113:3333/api/v1/pokemon/`,body)
// //   }
// // }

// // export const updatePokemon = (id,body,token) => {
// //   return {
// //     type: 'UPDATE_POKEMON',
// //     payload: axios.patch(`http://192.168.1.113:3333/api/v1/pokemon/update/${id}`,body,{
// //      headers: {
// //        Authorization: 'Bearer ' + token
// //      }
// //     })
// //   }
// // }

// export const getLogin = (body) => {
//   return {
//     type: 'GET_LOGIN',
//     payload: axios.post(`http://localhost:8888/api/v1/signin/`,body,{
//      headers: {
//        'Content-Type': 'application/json'
//      }
//     })
//   }
// }

// export const addRegister = (body) => {
//   return {
//     type: 'ADD_REGISTER',
//     payload: axios.post(`http://192.168.1.113:3333/api/v1/register/`,body)
//   }
// }