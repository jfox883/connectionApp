import REQUESTS_DATA from '../../mock-data/tramites';
import { GET_REQUESTS } from '../actions/requests.action';

const INITIAL_STATE = {
    list: [],
    selected: null
}

const RequestsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return {...state}
        case GET_REQUESTS:
            const response = REQUESTS_DATA.find(res => res.idEmpleado === action.idEmpleado)
            if (response !== undefined) {
                return {
                    ...state,
                    list: response.tramites,
                }
            }
            return {...state}
    }
}

export default RequestsReducer;