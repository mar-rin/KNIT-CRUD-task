import {LOCAL_DATA} from "../../utils/localData";

const initialState = [];

export default function shipmentsReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCEEDED': {
            return action.payload
        }
        case 'FETCH_DATA_FAILED': {
            return LOCAL_DATA
        }
        case 'SHIPMENT_DELETED': {
            return state.filter((shipment) => shipment.trackingNo !== action.payload)
        }
        case 'SHIPMENT_EDITED': {
            return state.map((shipment) => {
                if (shipment.trackingNo !== action.payload.trackingNo) {
                    return shipment
                }
                return action.payload
            })
        }
        case 'CUSTOMER_SORTED_ASCENDING': {
            return state.sort((a, b) => a.customer.toUpperCase().localeCompare(b.customer.toUpperCase()))
        }
        case 'CUSTOMER_SORTED_DESCENDING': {
            return state.sort((b, a) => a.customer.toUpperCase().localeCompare(b.customer.toUpperCase()))
        }
        case 'DATE_SORTED_ASCENDING': {
            const sortedItems = state.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateA - dateB;
            })
            return sortedItems
        }
        case 'DATE_SORTED_DESCENDING': {
            const sortedItems = state.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
            })
            return sortedItems
        }
        default:
            return state
    }
}


