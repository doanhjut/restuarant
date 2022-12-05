import * as actionType from "../actions/actionTpyes";
var initialState = {
  dataTable: [],
  language: "vn"
}
const dataTable = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_DATA_TABLE:
      return {
        ...state,
        restaurant_book: action.payload
      }
    case actionType.ON_CHANGE_LANGUAGE:
      if (initialState.language === "vn") {
        initialState.language = "en"
      }else{
        initialState.language = "vn"
      }
      return {
        ...state,
      }
    default:
      return state;
  }
};
export default dataTable