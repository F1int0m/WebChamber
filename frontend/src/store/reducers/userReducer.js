const GET_SELF = 'GET_SELF'
const GET_USER = 'GET_USER'
const EDIT_USER = 'EDIT_USER'
const SEARCH_USER = 'SEARCH_USER'
const SET_ID_FOR_GET = 'SET_ID_FOR_GET'

const ADMIN_SET_ROLE = 'SET_ROLE'


const defaultState = {
    user_id: '232868007', // менять через SET_ID_FOR_GET, чтобы вызвать GET
    role: 'unknown',
    nickname: 'Unknown user',
    mood_text: 'empty',
    description: 'empty',
    avatar_link: 'unknown'
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_SELF:
            return {
                ...state,
                role: action.payload.role,
                nickname: action.payload.nickname,
                description: action.payload.description,
                avatar_link: action.payload.avatar_link
            }
        case SET_ID_FOR_GET:
            return {
                ...state,
                user_id: action.payload.user_id
            }
        case GET_USER:
            return {
                ...state,
                user_id: action.payload.user_id,
                role: action.payload.role,
                nickname: action.payload.nickname,
                description: action.payload.description,
                avatar_link: action.payload.avatar_link
            }
        case EDIT_USER:
            return {
                ...state,
                nickname: action.payload.nickname,
                description: action.payload.description,
                avatar_link: action.payload.avatar_link
            }
        case SEARCH_USER:
            return {
                ...state
            }
        case ADMIN_SET_ROLE:
            return {
                ...state
            }
        default:
            return state
    }
}

export const getUserSelf = (userInfo) => ({type: GET_SELF, payload: userInfo})
export const getUser = (userInfo) => ({type: GET_USER, payload: userInfo})
export const setIdForGet = (userInfo) => ({type: SET_ID_FOR_GET, payload: userInfo})
export const editUserSelf = (userInfo) => ({type: EDIT_USER, payload: userInfo})
export const searchUser = (userInfo) => ({type: GET_USER, payload: userInfo})