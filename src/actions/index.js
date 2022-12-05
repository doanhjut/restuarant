import * as actionType from "./actionTpyes";
import axios from 'axios';

export const getDataTable = (data) => {
    return {
        type: actionType.GET_DATA_TABLE,
        payload: data
    };
};
export const onChangeLanguage = () => {
    return {
        type: actionType.ON_CHANGE_LANGUAGE,
    };
};
export const callApiGetDataTable = () => {
    return (dispatch) => {
        axios.get('http://192.168.160.85:5000/restaurant/book')
            .then(res => {
                const tables = res.data
                dispatch(getDataTable(tables))
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }
    // return {
    //     type: actionType.GET_DATA_TABLE,
    //     payload: data
    // };
};

export const bookTable = (number) => {
    return {
        type: actionType.BOOK_TABLE,
        payload: number
    };
};
export const changeLanguage = () => {
    return {
        type: actionType.CHANGE_LANGUAGE,
    };
};