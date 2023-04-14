import axios from 'axios';
import { fetchDataStarted, fetchDataSucceeded, fetchDataFailed, fetchDataFinished } from "./fetchingActions";

const URL = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";


const initialState = {
    isLoading: true,
    error: null
};

export default function fetchingReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA_STARTED': {
            return state
        }
        case 'FETCH_DATA_SUCCEEDED': {
            return {
                ...state,
                isLoading: false
            }
        }
        case 'FETCH_DATA_FAILED': {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        case 'FETCH_DATA_FINISHED': {
            return {
                isLoading: false
            }
        }
        default:
            return state
    }
}

export async function fetchData(dispatch) {
    dispatch(fetchDataStarted())
    try {
        const response = await axios.get(URL);
        dispatch(fetchDataSucceeded(response))
    } catch(error){
        console.log(error);
        dispatch(fetchDataFailed())
    } finally {
        dispatch(fetchDataFinished())
    }
}