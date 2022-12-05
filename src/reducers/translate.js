import * as actionType from "../actions/actionTpyes";
var initialState = "vn"
const dataTable = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_LANGUAGE_TRANSLATE:
      return {
        ...state,
        language: action.payload
      }
    case actionType.CHANGE_LANGUAGE:

      if(state=="vn"){
        initialState="en";
        return initialState;
      }else{
        initialState="vn";
        return initialState;
      }
    default:
      return state;
  }
};
export default dataTable