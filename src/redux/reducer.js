import axios from 'axios';

const initialState = {
    user: {},
    vehicles: []
};

// action types
const GET_USER_INFO = 'GET_USER_INFO';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const ADD_REFUEL = 'ADD_REFUEL';
const GET_VEHICLES = 'GET_VEHICLES';

// action creators
export function getUserInfo() {
    const user = axios.get('/auth/me').then(res => res.data);
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

export function updateUserInfo(userId, object) {
    const updatedUserInfo = axios.put(`/api/users/${userId}`, object).then(res => res);
    return {
        type: UPDATE_USER_INFO,
        payload: updatedUserInfo
    }
}

export function addRefuel(object, callback) {
    const newRefuel = axios.post('/api/refuels', object).then(() => callback());
    return {
        type: ADD_REFUEL,
        payload: newRefuel
    }
}

export function getVehicles(userId) {
    const vehicles = axios.get(`/api/vehicles/${userId}`).then(res => res);
    return {
        type: GET_VEHICLES,
        payload: vehicles
    }
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_USER_INFO + '_PENDING':
            return state;
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case GET_USER_INFO + '_REJECTED':
            return state;

        case UPDATE_USER_INFO + '_PENDING':
            return state;
        case UPDATE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload.data[0] });
        case UPDATE_USER_INFO + '_REJECTED':
            return state;

        case GET_VEHICLES + '_PENDING':
            return state;
        case GET_VEHICLES + '_FULFILLED':
            return Object.assign({}, state, { vehicles: action.payload.data });
        case GET_VEHICLES + '_REJECTED':
            return state;

        default:
            return state;
    }
}