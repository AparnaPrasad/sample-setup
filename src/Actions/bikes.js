import Api from "../Utils/api";
import {SET_BIKES_BY_CITIES, FETCH_BIKES_BEGIN, FETCH_BIKES_FAILURE, FETCH_BIKES_SUCCESS} from "../Utils/const";
import {setBikesByCities} from './cities';
import {setBikesByCountries} from './countries';
import {sample} from '../Utils/sample_response';
//import { normalize, schema } from 'normalizr';

// Define a users schema
//const bikesSchema = new schema.Entity('bikesByIds', {}, {idAttribute:'id'});
//const countrySchema = new schema.Entity('countries',{}, {idAttribute:'country'} )



/*const manufactorData =  new schema.Entity('manufactorData', {
    bikesSchema: bikesSchema,
    countrySchema: [countrySchema]
});*/

/*const comment = new schema.Entity('bikesById', {
    id: bikes
});*/
// Define your comments schema
/*const comment = new schema.Entity('comments', {
    commenter: user
});*/

// Define your article
/*const article = new schema.Entity('articles', {
    author: user
    //comments: [comment]
});*/
//bikesSchema.define({countrySchema: countrySchema})


export function fetchBikesNetwork(){
    /*return (dispatch) => {
        dispatch(fetchBikesBegin());
        Api.get('/').then(response => {
            console.log(response);
            if(response && response.data && response.data.networks) {
               // const normalizedData = normalize(response.data.networks, [bikesSchema]);

                dispatch(fetchBikesSuccess(response.data.networks));
                dispatch(setBikesByCities(response.data.networks));
                dispatch(setBikesByCountries(response.data.networks));
            }
            else{
                dispatch(fetchBikesFailure('Unformatted data received'))
            }
        }).catch(error=>{
            dispatch(fetchBikesFailure(error))
        })
    }*/

    return (dispatch) => {
        dispatch(fetchBikesSuccess(sample.data.networks));
        dispatch(setBikesByCities(sample.data.networks));
        dispatch(setBikesByCountries(sample.data.networks));
    }

}

export const fetchBikesBegin = () => ({
    type: FETCH_BIKES_BEGIN
});

export const fetchBikesSuccess = products => ({
    type: FETCH_BIKES_SUCCESS,
    payload:  products
});

export const fetchBikesFailure = error => ({
    type: FETCH_BIKES_FAILURE,
    payload:  error
});