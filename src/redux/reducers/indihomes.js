const initialState = {
  customer: [
    {
      email:"tes@gmail.com",
      name:"tes",
      no:"0992312231",
      address:"tes"
    },
    {
      email:"tes@gmail.com",
      name:"tes",
      no:"0992312231",
      address:"tes"
    },
    {
      email:"tes@gmail.com",
      name:"tes",
      no:"0992312231",
      address:"tes"
    },
    {
      email:"tes@gmail.com",
      name:"tes",
      no:"0992312231",
      address:"tes"
    },
    {
      email:"tes@gmail.com",
      name:"tes",
      no:"0992312231",
      address:"tes"
    },
  ]
}
const indihomes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
    return {
      ...state,
      isLoading: true,
      customer: action.payload
    }

    default:
    return state;
  }
}
export default indihomes;