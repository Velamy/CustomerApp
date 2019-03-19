import {FETCH_CUSTOMERS} from './../constants';
import { createAction } from 'redux-actions';
import { apiGetCustomers } from './../api';
import { urlCustomers } from './../api/urls';


//export const fetchCustomers = () => ({type: FETCH_CUSTOMERS, payload: null});
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGetCustomers(urlCustomers));
