export const FETCH_BIKES_BEGIN   = 'FETCH_BIKES_BEGIN';
export const FETCH_BIKES_SUCCESS = 'FETCH_BIKES_SUCCESS';
export const FETCH_BIKES_FAILURE = 'FETCH_BIKES_FAILURE';
export const SET_CITIES = 'SET_CITIES';
export const SET_COUNTRIES = 'SET_BIKES_BY_COUNTRIES';
export const table_fields={
    id:'id',
    name: 'name',
    city: 'city',
    country: 'country'
}

export const group_by = [ {key: "country", value: "Country"},{key: "city", value: "City"}, {key: "both", value: "Both"}]
   