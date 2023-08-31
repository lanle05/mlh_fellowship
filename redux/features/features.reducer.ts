import { featureTypes } from "./features.types"

const initialState = {
    activeSidebar: true,
    activeUserSideMenu:true,
    screenSize: undefined,
    editModal: false
}

export interface ActionTypes {
    type: string,
    payload: any
}

export const featuresReducer = (state=initialState,action:ActionTypes) => {
    switch(action.type) {
        case featureTypes.SET_ACTIVE_SIDEBAR:
            return {
                ...state,
                activeSidebar: action.payload
            }
        case featureTypes.SET_ACTIVE_USER_SIDEMENU:
            return {
                ...state,
                activeUserSideMenu: action.payload
            }
        case featureTypes.SET_SCREEN_SIZE:
                return {
                    ...state,
                    screenSize: action.payload
                }
        case featureTypes.OPEN_EDIT_MODAL:
            return {
                ...state,
                editModal: action.payload
            }
        default: 
            return state;
    }
}