import * as actionType from "../actions/actionTpyes";
const initialState = {
  dataTable: [],
}
const dataTable = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_DATA_TABLE:
      return {
        ...state,
        restaurant_book: action.payload
      }
    default:
      return state;
  }
};
export default dataTable