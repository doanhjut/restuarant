import { createSlice } from '@reduxjs/toolkit'
const dataTable = createSlice({
  name: 'dataTable',
  initialState: [],
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    removePost(state, action) {
      state.splice(action.payload, 1)
    }
  }
});
const { actions, reducer } = dataTable;
export const { addPost, removePost } = actions;
export default reducer;