import { configureStore } from '@reduxjs/toolkit'
import dataTable from "./dataTable";
// import connectSocket from "./ConnectSocket";
const store = configureStore({
  reducer: {
    dataTable:dataTable
  },
});
export default store;