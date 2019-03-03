import {FETCH_BIKES_SUCCESS} from '../Utils/const';

const initialState = {
    //bikesById: [],
    //bikeIds:[],
    bikeList:[],
    loading: false,
    error: null
};


export default function bikes(state = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case FETCH_BIKES_SUCCESS:

            return{
                ...state,
                bikeList: payload
            }
        default:
            return state;
    }

}